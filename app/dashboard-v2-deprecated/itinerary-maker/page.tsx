// "use client";

// // import StartingLocationForm from "./components/starting-location-form";
// // import FilterCompaniesForm from "./components/filter-companies-form";
// // import GenerateAndSave from "./components/generate-and-save";
// // import ItineraryStageProgress, {
// //   ItineraryStage,
// // } from "./components/itinerary-stage-progress";
// // import { useState } from "react";
// import { useEffect } from 'react';
// import { useRouter } from 'next/router'; // Correctly import useRouter

// const Page = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to the homepage or another relevant page
//     router.push('/dashboard');
//   }, [router]);

//   // Optionally, you can return null or a loading indicator
//   // if you want something to be displayed briefly before the redirect.
//   return null;
//   // const [currentItineraryStage, setCurrentItineraryStage] =
//   //   useState<ItineraryStage>(ItineraryStage.SET_LOCATION);

//   // return (
//   //   <section className="bg-white dark:bg-gray-900">
//   //     <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
//   //       <h1 className="mb-6 text-center text-5xl font-bold text-gray-900 dark:text-white">
//   //         Itinerary Maker
//   //       </h1>
//   //       <ItineraryStageProgress currentItineraryStage={currentItineraryStage} />
//   //       {currentItineraryStage === ItineraryStage.SET_LOCATION && (
//   //         <StartingLocationForm currentPageHandler={setCurrentItineraryStage} />
//   //       )}
//   //       {currentItineraryStage === ItineraryStage.FILTER_COMPANIES && (
//   //         <FilterCompaniesForm currentPageHandler={setCurrentItineraryStage} />
//   //       )}
//   //       {currentItineraryStage === ItineraryStage.GENERATE_AND_SAVE && (
//   //         <GenerateAndSave currentPageHandler={setCurrentItineraryStage} />
//   //       )}
//   //     </div>
//   //   </section>
//   // );
// };

// export default Page;

"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return null;
}

export default Page;
