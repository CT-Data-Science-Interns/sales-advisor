"use client";

import StartingLocationForm from "./components/starting-location-form";
import FilterCompaniesForm from "./components/filter-companies-form";
import ItineraryStageProgress, {
  ItineraryStage,
} from "./components/itinerary-stage-progress";
import { useState } from "react";

const Page = () => {
  const [currentItineraryStage, setCurrentItineraryStage] =
    useState<ItineraryStage>(ItineraryStage.SET_LOCATION);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
        <h1 className="mb-10 text-center text-5xl font-bold text-gray-900 dark:text-white">
          Itinerary Maker
        </h1>
        <ItineraryStageProgress currentItineraryStage={currentItineraryStage} />
        {currentItineraryStage === ItineraryStage.SET_LOCATION && (
          <StartingLocationForm currentPageHandler={setCurrentItineraryStage} />
        )}
        {currentItineraryStage === ItineraryStage.FILTER_COMPANIES && (
          <FilterCompaniesForm />
        )}
      </div>
    </section>
  );
};

export default Page;
