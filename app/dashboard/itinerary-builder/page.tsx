"use client";

import StartingLocationForm from "./components/starting-location-form";
import FilterCompaniesForm from "./components/filter-companies-form";
import GenerateAndSave from "./components/generate-and-save";
import ItineraryStageProgress, {
  ItineraryStage,
} from "./components/itinerary-stage-progress";
import { useEffect, useState } from "react";
import { getDelegations, DelegationObject } from "./lib/get-delegations";
import { CompanyFilter } from "./lib/filter-companies";

const Page = () => {
  const [currentItineraryStage, setCurrentItineraryStage] =
    useState<ItineraryStage>(ItineraryStage.SET_LOCATION);

  // Starting location form handlers
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [address, setAddress] = useState<string | null>(null);
  const [latLng, setLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Filter companies form handlers
  const [delegations, setDelegations] = useState<DelegationObject | null>(null);
  const [filteredCompanies, setFilteredCompanies] = useState<
    CompanyFilter[] | null
  >(null);

  useEffect(() => {
    getDelegations("9nBLeN62Zo4s1Y74Phez").then((data) => setDelegations(data));
  }, []);

  return (
    <div className="mx-auto bg-white px-4 py-8 dark:bg-gray-900 md:max-w-6xl lg:py-16">
      <h1 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white">
        Itinerary Maker
      </h1>
      <ItineraryStageProgress currentItineraryStage={currentItineraryStage} />
      {currentItineraryStage === ItineraryStage.SET_LOCATION && (
        <StartingLocationForm
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          address={address}
          setAddress={setAddress}
          latLng={latLng}
          setLatLng={setLatLng}
          currentPageHandler={setCurrentItineraryStage}
        />
      )}
      {currentItineraryStage === ItineraryStage.FILTER_COMPANIES && (
        <FilterCompaniesForm
          currentPageHandler={setCurrentItineraryStage}
          delegations={delegations}
          setFilteredCompanies={setFilteredCompanies}
        />
      )}
      {currentItineraryStage === ItineraryStage.GENERATE_AND_SAVE && (
        <GenerateAndSave
          startDate={startDate}
          endDate={endDate}
          address={address}
          latLng={latLng}
          filteredCompanies={filteredCompanies}
        />
      )}
    </div>
  );
};

export default Page;
