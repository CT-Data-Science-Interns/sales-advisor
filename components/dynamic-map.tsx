/* global google */
import React, { useEffect, useRef } from "react";

const DynamicMap = ({
  latLangHandler,
  addressHandler,
}: {
  latLangHandler: CallableFunction;
  addressHandler: CallableFunction;
}) => {
  const mapRef = useRef(null);
  let map: google.maps.Map;
  let geocoder: google.maps.Geocoder;

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    // Will use env variable for the API key
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAnOO0FR11Im8BbwWC0IB2r5uPdZ6c7SvQ`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.addEventListener("load", initializeMap);
    document.body.appendChild(googleMapsScript);
  }, []);

  const initializeMap = async () => {
    if (!mapRef.current) return;
    map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 14.65052392789819, lng: 121.0751724243164 },
      zoom: 12,
    });

    geocoder = new window.google.maps.Geocoder();

    // Will migrate to AdvancedMarkerElement, need to change first how the library is imported
    let marker: google.maps.Marker | null = null;
    map.addListener(
      "click",
      async (mapsMouseEvent: google.maps.MapMouseEvent) => {
        if (!mapsMouseEvent.latLng) return;
        latLangHandler(mapsMouseEvent.latLng?.toJSON());
        addressHandler(await getAddress(mapsMouseEvent.latLng));
        if (marker == null) {
          marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
          });
          map.panTo(mapsMouseEvent.latLng ?? { lat: 37.7749, lng: -122.4194 });
        } else marker.setPosition(mapsMouseEvent.latLng);
      }
    );
  };

  const getAddress = async (latLng: google.maps.LatLng) => {
    let address;
    await geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK") {
        if (results && results[0]) {
          address = results[0].formatted_address;
        } else {
          return null;
        }
      } else {
        throw new Error(`Geocoder failed due to: ${status}`);
      }
    });
    return address;
  };

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

export default DynamicMap;
