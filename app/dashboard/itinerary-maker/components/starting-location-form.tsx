"use client";
import DynamicMap from "@/components/dynamic-map";
import FormSelect from "@/components/form-select";
import FormTextInput from "@/components/form-text-input";

import React, { useState } from "react";
import { ItineraryStage } from "./itinerary-stage-progress";

const StartingLocationForm = ({
  currentPageHandler,
}: {
  currentPageHandler: CallableFunction;
}) => {
  const [date, setDate] = useState<{
    startDate: Date;
    endDate: Date;
  } | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [latLng, setLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Logging for now to remove linting errors
  const handleFormSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    currentPageHandler(ItineraryStage.FILTER_COMPANIES);
  };

  console.log(date, country, state, address, latLng);

  return (
    <form action="#">
      <div className="gap-4 sm:mb-2 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-5">
        <div className="space-y-4 rounded-xl border-2 border-gray-300 p-4 xl:col-span-2">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Indicate Starting Location
          </h2>
          {/* <div>
            <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
              <div className="w-full">
                <FormSelect
                  title="Country"
                  onSelectChange={setCountry}
                  options={[
                    "Philippines",
                    "United States",
                    "United Kingdom",
                    "Japan",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
            <div className="w-full">
              <FormSelect
                title="State"
                onSelectChange={setState}
                options={["Pangasinan", "QC", "Manila", "Cebu"]}
              />
            </div>
          </div> */}

          <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
            <div className="w-full">
              <FormTextInput
                title="Address"
                value={address ?? ""}
                onInputChange={setAddress}
              />
            </div>
          </div>
          <div>Latitude: {latLng?.lat}</div>

          <div>Longitude: {latLng?.lng}</div>
          <button
            type="submit"
            onClick={(e) => handleFormSubmit(e)}
            className="justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Filtering
          </button>
        </div>

        <div className="mb-4 space-y-4 xl:col-span-3">
          <DynamicMap latLangHandler={setLatLng} addressHandler={setAddress} />
        </div>
      </div>
    </form>
  );
};

export default StartingLocationForm;
