/* global google */

import React, { useEffect, useState } from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapMouseEvent,
  Pin,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import AutocompletePlace from "./autocomplete-place";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

const SelectLocationMap = ({
  latLangHandler,
  addressHandler,
}: {
  latLangHandler: CallableFunction;
  addressHandler: CallableFunction;
}) => {
  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <SelectLocationMapChild
        latLangHandler={latLangHandler}
        addressHandler={addressHandler}
      />
    </APIProvider>
  );
};

const SelectLocationMapChild = ({
  latLangHandler,
  addressHandler,
}: {
  latLangHandler: CallableFunction;
  addressHandler: CallableFunction;
}) => {
  const map = useMap();
  const geocodingLibrary = useMapsLibrary("geocoding");
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (!geocodingLibrary) return;
    setGeocoder(new geocodingLibrary.Geocoder());
  }, [geocodingLibrary, map]);

  const handleMapClick = async (mapsMouseEvent: MapMouseEvent) => {
    if (!mapsMouseEvent.detail.latLng) return;
    setSelectedLocation(mapsMouseEvent.detail.latLng);
    latLangHandler(mapsMouseEvent.detail.latLng);
    await geocoder?.geocode(
      { location: mapsMouseEvent.detail.latLng },
      (results, status) => {
        if (status === "OK") {
          if (results && results[0]) {
            addressHandler(results[0].formatted_address);
          } else {
            return null;
          }
        } else {
          throw new Error(`Geocoder failed due to: ${status}`);
        }
      }
    );
  };

  return (
    <>
      <AutocompletePlace
        onPlaceSelect={(place) => {
          if (
            !place ||
            !place.geometry ||
            !place.geometry.location ||
            !place.geometry.viewport
          )
            return;
          map?.fitBounds(place.geometry.viewport);
          setSelectedLocation({
            lat: place.geometry.location?.lat(),
            lng: place.geometry.location?.lng(),
          });
          latLangHandler({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
          addressHandler(place.formatted_address);
        }}
      />
      <Map
        mapId={"default"}
        defaultZoom={12}
        defaultCenter={{
          lat: 14.65052392789819,
          lng: 121.0751724243164,
        }}
        gestureHandling={"greedy"}
        onClick={handleMapClick}
      >
        <AdvancedMarker
          position={selectedLocation}
          title={"AdvancedMarker with customized pin."}
        >
          <Pin
            background={"#22ccff"}
            borderColor={"#1e89a1"}
            glyphColor={"#0f677a"}
          ></Pin>
        </AdvancedMarker>
      </Map>
    </>
  );
};

export default SelectLocationMap;
