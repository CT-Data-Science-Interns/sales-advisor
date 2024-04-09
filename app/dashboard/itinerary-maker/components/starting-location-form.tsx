"use client";
import SelectLocationMap from "@/components/select-location-map";

import React, { FormEvent, useState } from "react";
import { ItineraryStage } from "./itinerary-stage-progress";

const StartingLocationForm = ({
  currentPageHandler,
}: {
  currentPageHandler: CallableFunction;
}) => {
  // const [date, setDate] = useState<{
  //   startDate: Date;
  //   endDate: Date;
  // } | null>(null);
  // const [country, setCountry] = useState<string | null>(null);
  // const [state, setState] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [latLng, setLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    currentPageHandler(ItineraryStage.FILTER_COMPANIES);
  };

  // Logging for now to remove linting errors
  console.log(address, latLng);

  return (
    <form onSubmit={handleFormSubmit}>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
        Search for a location or click on the map
      </h2>
      <div className="gap-4 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-5">
        <div className="h-96 space-y-4 xl:col-span-3">
          <div className="h-80">
            <SelectLocationMap
              latLangHandler={setLatLng}
              addressHandler={setAddress}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-xl border-2 border-gray-300 p-4 xl:col-span-2">
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Selected starting location
            </h2>

            <div>
              <span className="font-semibold">Address: </span>
              {address}
            </div>
            <div>
              <span className="font-semibold">Latitude:</span> {latLng?.lat}
            </div>
            <div>
              <span className="font-semibold">Longitude:</span> {latLng?.lng}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Proceed to Filtering
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StartingLocationForm;
