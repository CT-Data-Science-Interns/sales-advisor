/* global google */

import React, { useRef, useEffect, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export const AutocompletePlace = ({
  onPlaceSelect,
}: {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}) => {
  return (
    <APIProvider apiKey={API_KEY}>
      <AutocompletePlaceChild onPlaceSelect={onPlaceSelect} />
    </APIProvider>
  );
};

export const AutocompletePlaceChild = ({
  onPlaceSelect,
}: {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <input
      ref={inputRef}
      className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    />
  );
};

export default AutocompletePlace;
