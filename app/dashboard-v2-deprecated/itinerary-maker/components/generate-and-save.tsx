"use client";
import React, { FormEvent } from "react";
import { ItineraryStage } from "./itinerary-stage-progress";
// import ItineraryMap from "@/components/itinerary-map";

const GenerateAndSave = ({
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
  // const [address, setAddress] = useState<string | null>(null);
  // const [latLng, setLatLng] = useState<{
  //   lat: number;
  //   lng: number;
  // } | null>(null);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    currentPageHandler(ItineraryStage.FILTER_COMPANIES);
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <div className="flex justify-center">
        <div className="mb-4 h-[500px] w-[800px] space-y-4 xl:col-span-3">
          {/* <ItineraryMap /> */}
        </div>
      </div>
    </form>
  );
};

export default GenerateAndSave;
