"use client";

import StartingLocationForm from "./components/starting-location-form";
import FilterCompaniesForm from "./components/filter-companies-form";
import GenerateAndSave from "./components/generate-and-save";
import ItineraryStageProgress, {
  ItineraryStage,
} from "./components/itinerary-stage-progress";
import { useEffect, useState } from "react";
import { getDelegations, DelegationObject } from "./lib/get-delegations";

const Page = () => {
  const [currentItineraryStage, setCurrentItineraryStage] =
    useState<ItineraryStage>(ItineraryStage.SET_LOCATION);
  const [delegations, setDelegations] = useState<DelegationObject | null>(null);

  useEffect(() => {
    getDelegations("9nBLeN62Zo4s1Y74Phez").then((data) => setDelegations(data));
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
        <h1 className="mb-6 text-center text-5xl font-bold text-gray-900 dark:text-white">
          Itinerary Maker
        </h1>
        <ItineraryStageProgress currentItineraryStage={currentItineraryStage} />
        {currentItineraryStage === ItineraryStage.SET_LOCATION && (
          <StartingLocationForm currentPageHandler={setCurrentItineraryStage} />
        )}
        {currentItineraryStage === ItineraryStage.FILTER_COMPANIES && (
          <FilterCompaniesForm
            currentPageHandler={setCurrentItineraryStage}
            delegations={delegations}
          />
        )}
        {currentItineraryStage === ItineraryStage.GENERATE_AND_SAVE && (
          <GenerateAndSave currentPageHandler={setCurrentItineraryStage} />
        )}
      </div>
    </section>
  );
};

export default Page;
