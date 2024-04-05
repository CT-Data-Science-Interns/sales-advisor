import React from "react";

export enum ItineraryStage {
  // eslint-disable-next-line no-unused-vars
  SET_LOCATION = "Set starting location",
  // eslint-disable-next-line no-unused-vars
  FILTER_COMPANIES = "Filter delegated companies",
  // eslint-disable-next-line no-unused-vars
  GENERATE_AND_SAVE = "Generate and Save Itinerary",
}

const ItineraryStageItem = ({
  itineraryStage,
  isCurrent,
  children,
}: {
  itineraryStage: ItineraryStage;
  isCurrent: Boolean;
  children?: React.ReactNode;
}) => {
  return (
    <li className="relative my-6 sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
          <svg
            className={`w-6 h-6  ${isCurrent ? "text-blue-800" : "text-blue-500"} ${isCurrent ? "dark:text-blue-200" : "dark:text-blue-400"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {children}
          </svg>
        </div>
        <div className="hidden h-0.5 w-full bg-gray-800 dark:bg-gray-700 sm:flex" />
      </div>
      <div className="mt-3 sm:pe-8">
        <h3
          className={`text-sm text-gray-900 dark:text-white ${isCurrent ? "font-bold" : "font-medium"}`}
        >
          {itineraryStage}
        </h3>
      </div>
    </li>
  );
};

const ItineraryStageProgress = ({
  currentItineraryStage,
}: {
  currentItineraryStage: ItineraryStage;
}) => {
  return (
    <div className="mb-6 flex justify-center">
      <ol className="items-center sm:flex">
        <ItineraryStageItem
          itineraryStage={ItineraryStage.SET_LOCATION}
          isCurrent={ItineraryStage.SET_LOCATION === currentItineraryStage}
        >
          <path
            fillRule="evenodd"
            d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z"
            clipRule="evenodd"
          />
        </ItineraryStageItem>
        <ItineraryStageItem
          itineraryStage={ItineraryStage.FILTER_COMPANIES}
          isCurrent={ItineraryStage.FILTER_COMPANIES === currentItineraryStage}
        >
          <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
        </ItineraryStageItem>
        <ItineraryStageItem
          itineraryStage={ItineraryStage.GENERATE_AND_SAVE}
          isCurrent={ItineraryStage.GENERATE_AND_SAVE === currentItineraryStage}
        >
          <path
            fillRule="evenodd"
            d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
            clipRule="evenodd"
          />
        </ItineraryStageItem>
      </ol>
    </div>
  );
};

export default ItineraryStageProgress;
