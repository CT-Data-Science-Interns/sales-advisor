"use client";
import SelectLocationMap from "@/components/select-location-map";

import React, { FormEvent, useState } from "react";
import { ItineraryStage } from "./itinerary-stage-progress";
import DatePicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";

// Datepicker options
const startDatepickerOptions: IOptions = {
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  inputDateFormatProp: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
};
const endDatepickerOptions: IOptions = {
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  datepickerClassNames: "right-0",
  inputDateFormatProp: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
};

const StartingLocationForm = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  address,
  setAddress,
  latLng,
  setLatLng,
  currentPageHandler,
}: {
  startDate: Date;
  setStartDate: CallableFunction;
  endDate: Date;
  setEndDate: CallableFunction;
  address: string | null;
  setAddress: CallableFunction;
  latLng: { lat: number; lng: number } | null;
  setLatLng: CallableFunction;
  currentPageHandler: CallableFunction;
}) => {
  const [showStartDate, setShowStartDate] = useState<boolean>(false);
  const [showEndDate, setShowEndDate] = useState<boolean>(false);

  const onSelectedStartDateChanged = (date: Date) => {
    // Adjust end date if start date is greater
    if (date > endDate) {
      setEndDate(date);
    }
    setStartDate(date);
  };
  const onSelectedEndDateChanged = (date: Date) => {
    // Adjust start date if end date is greater
    if (startDate > date) {
      setStartDate(date);
    }
    setEndDate(date);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!address || !latLng) {
      // Temporary alert for now
      // Use a modal or a toast notification
      alert("Please select a location on the map");
      return;
    }
    currentPageHandler(ItineraryStage.FILTER_COMPANIES);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
        Where will you be coming from? Search for a location or click on the map
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
            <div className="flex">
              <DatePicker
                value={startDate}
                options={startDatepickerOptions}
                classNames="relative"
                show={showStartDate}
                setShow={setShowStartDate}
                selectedDateState={[startDate, onSelectedStartDateChanged]}
              />
              <span className="mx-4 my-auto text-gray-500">to</span>
              <DatePicker
                value={endDate}
                options={endDatepickerOptions}
                classNames="relative"
                show={showEndDate}
                setShow={setShowEndDate}
                selectedDateState={[endDate, onSelectedEndDateChanged]}
              />
            </div>
            <div className="text-gray-900 dark:text-white">
              <span className="font-semibold">Address: </span>
              {address}
            </div>
            <div className="text-gray-900 dark:text-white">
              <span className="font-semibold">Latitude:</span> {latLng?.lat}
            </div>
            <div className="text-gray-900 dark:text-white">
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
