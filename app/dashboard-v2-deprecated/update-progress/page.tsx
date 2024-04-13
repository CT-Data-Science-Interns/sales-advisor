// import kanbanBoards from "@/app/dashboard/update-progress/data/progress-contents.json";
// import type { KanbanBoard } from "@/types/progress-contents.d.ts";
// import KanbanPageContent from "./content.tsx";
// import StaticPageFooter from "@/components/static-page-footer.tsx";

// export interface KanbanPageData {
//   kanbanBoards: KanbanBoard[];
// }

// async function getData() {
//   return { kanbanBoards } as KanbanPageData;
// }

// export default async function KanbanPage() {
//   return (
//     <div>
//       <div className="max-w-screen mt-10 flex h-screen flex-col items-center">
//         <h1 className="mt- 6 mb-4 text-center text-5xl font-bold text-gray-900 dark:text-white">
//           Sales Visit Progress Tracker
//         </h1>

//         <section className="bg-white dark:bg-gray-900">
//           <div className="flex flex-col px-8 py-16 lg:flex-row lg:justify-start lg:px-10 lg:py-20">
//             <div className="grid grid-cols-3 gap-10 lg:gap-16">
//               <form>
//                 <label
//                   htmlFor="dates"
//                   className="mb-4 block text-base font-medium text-gray-900 dark:text-white"
//                 >
//                   Select Date option
//                 </label>
//                 <select
//                   id="dates"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
//                   defaultValue=""
//                 >
//                   <option disabled value="">
//                     Select an option
//                   </option>
//                   <option value="all">All Dates</option>
//                   <option value="range">Date Range</option>
//                   <option value="specific">Specific Date</option>
//                 </select>
//               </form>

//               <div className="my-6 flex items-center space-x-4">
//                 <input
//                   name="start"
//                   type="date"
//                   id="start"
//                   placeholder="Select start date"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                 />
//                 <span className="text-xl text-gray-500">to</span>
//                 <input
//                   name="end"
//                   type="date"
//                   placeholder="Select end date"
//                   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                 />
//               </div>

//               <div className="ml-5">
//                 <div>
//                   <div className="mb-1 flex justify-between">
//                     <span className="text-base font-medium text-blue-700 dark:text-white">
//                       Your Progress
//                     </span>
//                     <span className="text-sm font-medium text-blue-700 dark:text-white">
//                       45%
//                     </span>
//                   </div>
//                   <div className="h-10 w-full rounded-full bg-gray-200 dark:bg-gray-700">
//                     <div
//                       className="h-10 rounded-full bg-blue-600 dark:bg-blue-500"
//                       style={{ width: "45%" }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="bg-white dark:bg-gray-900">
//           <div
//             style={{ maxWidth: "75%", margin: "0 auto" }}
//             className="mb-8 text-center lg:mb-16"
//           >
//             <h3 className="mb-8 font-bold text-gray-900 dark:text-gray-400 sm:text-xl">
//               Search below to find the projects you are looking for.
//             </h3>
//             <label
//               htmlFor="email-adress-icon"
//               className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Your Email
//             </label>
//             <div className="relative">
//               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                 <svg
//                   className="size-6 text-gray-500 dark:text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 id="email-adress-icon"
//                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-12 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                 placeholder="Type keywords to find answers"
//               />
//             </div>
//           </div>
//           <div className="max-w-screen-3xl mx-auto px-8 py-16 lg:px-10 lg:py-20">
//             <KanbanPageContent {...await getData()} />
//           </div>
//         </section>

//         <div className="mt-8 inline-flex items-center px-3 py-2 text-center text-sm font-medium">
//           <a
//             href="/dashboard/progress-schedule"
//             title=""
//             className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
//           >
//             View Schedule
//             <svg
//               className="ml-3 size-6 text-primary-600 hover:underline dark:text-primary-500"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
//               />
//             </svg>
//           </a>
//         </div>
//         <StaticPageFooter />
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from 'next/router';

const Page = () => {

  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return null;
}

export default Page