"use client";
import React, { useState } from "react";
import DatePickerSection from "./lib/date-picker-section";
import ItineraryList from "./lib/itinerary-list";

const Page = () => {
  // State variables to store startDate and endDate
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  // Callback function to log startDate changes
  const handleStartDateChange = (date: Date) => {
    console.log("Start Date:", date);
    setStartDate(date);
  };

  // Callback function to log endDate changes
  const handleEndDateChange = (date: Date) => {
    console.log("End Date:", date);
    setEndDate(date);
  };

  // progressValue is assumed to be defined elsewhere in your component

  return (
    <div>
      <div className="max-w-screen mt-10 flex h-screen flex-col items-center">
        <h1 className="mt- 6 mb-4 text-center text-5xl font-bold text-gray-900 dark:text-white">
          Sales Visit Progress Tracker
        </h1>
        {/* Other components or content */}
        <DatePickerSection
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />
        <ItineraryList startDate={startDate} endDate={endDate} />
        {/* Other components or content */}
      </div>
    </div>
  );
};

export default Page;
