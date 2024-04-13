// import React from "react";

// const Page = () => {
//   return (
//     <div>
//       <div className="max-w-screen mt-10 flex h-screen flex-col items-center">
//         <h1 className="mt- 6 mb-4 text-center text-5xl font-bold text-gray-900 dark:text-white">
//           Sales Visit Progress Tracker
//         </h1>

//         {/* First Column: Select Date Part */}
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

//               {/* Second Column: Progress Bar */}
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

//         {/* Second Row: Conversion Status */}
//         <section className="bg-white dark:bg-gray-900">
//           <div className="max-w-screen-3xl mx-auto px-8 py-16 lg:px-10 lg:py-20">
//             <div className="grid grid-cols-3 gap-10 lg:gap-16">
//               {/* Ongoing Column */}
//               <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-10 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
//                 <h3 className="mb-8 text-4xl font-semibold">Ongoing</h3>
//                 {/* Cards for companies in Ongoing status */}
//                 <div className="space-y-8">
//                   <div className="rounded-lg bg-gray-100 p-8">
//                     <h4 className="mb-2 font-bold">21 CENTURY CORPORATION</h4>
//                     <p>
//                       Building 11, EZP Center Determine Street, CPIP, Barangay
//                       Batino Calamba, Laguna, 4027 Philippines
//                     </p>
//                     <p>Business Category: Tools, Cutters, Moulds, and Dies</p>
//                     <a
//                       href="#"
//                       className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read more
//                       <svg
//                         className="ms-2 size-3.5 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                   <div className="rounded-lg bg-gray-100 p-8">
//                     <h4 className="mb-2 font-bold">
//                       3J METAL INDUSTRIES, INC.
//                     </h4>
//                     <p>
//                       16 Golden Lane Morningstar Heights Culiat Quezon, Manila,
//                       1100 Philippines
//                     </p>
//                     <p>Business Category: Steel</p>
//                     <a
//                       href="#"
//                       className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read more
//                       <svg
//                         className="ms-2 size-3.5 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                   {/* Add more cards for companies as needed */}
//                 </div>
//               </div>

//               {/* Success Column */}
//               <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-10 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
//                 <h3 className="mb-8 text-4xl font-semibold">Success</h3>
//                 {/* Cards for companies in Success status */}
//                 <div className="space-y-8">
//                   <div className="rounded-lg bg-gray-100 p-8">
//                     <h4 className="mb-2 font-bold">3M PHILIPPINES, INC.</h4>
//                     <p>
//                       10th and 11th Floors The Finance Center 26th Street corner
//                       9th Avenue Taguig, Manila, 1634 Philippines
//                     </p>
//                     <p>Business Category: Transportation Equipment</p>
//                     <a
//                       href="#"
//                       className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read more
//                       <svg
//                         className="ms-2 size-3.5 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                   <div className="rounded-lg bg-gray-100 p-8">
//                     <h4 className="mb-2 font-bold">Puyat Steel Corporation</h4>
//                     <p>
//                       2nd Floor Alegria Alta Building 2294 Don Chino Roces
//                       Extension, Magallanes Makati, Manila, 1232 Philippines
//                     </p>
//                     <p>Business Category: Fabricated Metal</p>
//                     <a
//                       href="#"
//                       className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read more
//                       <svg
//                         className="ms-2 size-3.5 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                   {/* Add more cards for companies as needed */}
//                 </div>
//               </div>

//               {/* Failed Column */}
//               <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-10 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
//                 <h3 className="mb-8 text-4xl font-semibold">Failed</h3>
//                 {/* Cards for companies in Failed status */}
//                 <div className="space-y-8">
//                   <div className="rounded-lg bg-gray-100 p-8">
//                     <h4 className="mb-2 font-bold">A.S.RIVERA CORPORATION</h4>
//                     <p>
//                       Block 46, Lot 1, Pampano Street, Barangay Longos Malabon,
//                       Manila, 1470 Philippines
//                     </p>
//                     <p>Business Category: Fabricated Metal</p>
//                     <a
//                       href="#"
//                       className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read more
//                       <svg
//                         className="ms-2 size-3.5 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                   <div className="rounded-lg bg-gray-100 p-8">
//                     <h4 className="mb-2 font-bold">
//                       AAB BAKING GOODS & SUPPLIES INC.
//                     </h4>
//                     <p>
//                       2 Kitanlad Street corner Quezon Avenue, Barangay Dona
//                       Josefa Quezon, Manila, 1113 Philippines
//                     </p>
//                     <p>Business Category: Food</p>
//                     <a
//                       href="#"
//                       className="mt-6 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read more
//                       <svg
//                         className="ms-2 size-3.5 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Fourth Row: Client List */}
//         <div className="relative shadow-md sm:rounded-lg">
//           <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
//             <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white rtl:text-right">
//               Client List
//               <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
//                 Overview of the clients.
//               </p>
//             </caption>
//             <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-all-search"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label htmlFor="checkbox-all-search" className="sr-only">
//                       checkbox
//                     </label>
//                   </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Company
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Business Model
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Subcategory
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Address
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Annual Sales
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Visit Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Deal Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   EPSON PRECISION (PHILIPPINES), INC.
//                 </td>
//                 <td className="px-6 py-4">End-User</td>
//                 <td className="px-6 py-4">
//                   Commercial And Service Industry Machinery
//                 </td>
//                 <td className="px-6 py-4">
//                   Special Economic Processing Zone (SEPZ), Lima Technology
//                   Center Lipa City, Batangas, 4217 Philippines
//                 </td>
//                 <td className="px-6 py-4">1,236,040,000</td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-green-500"></div>
//                     Visited
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-red-500"></div>
//                     Failed
//                   </div>
//                 </td>
//               </tr>

//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   3M PHILIPPINES, INC.
//                 </td>
//                 <td className="px-6 py-4">End-User</td>
//                 <td className="px-6 py-4">Transportation Equipment</td>
//                 <td className="px-6 py-4">
//                   10th and 11th Floors The Finance Center 26th Street corner 9th
//                   Avenue Taguig, Manila, 1634 Philippines
//                 </td>
//                 <td className="px-6 py-4">1,540,000</td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-green-500"></div>
//                     Visited
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-green-500"></div>
//                     Success
//                   </div>
//                 </td>
//               </tr>

//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   21 CENTURY CORPORATION
//                 </td>
//                 <td className="px-6 py-4">End-User</td>
//                 <td className="px-6 py-4">Tools, Cutters, Moulds, and Dies</td>
//                 <td className="px-6 py-4">
//                   Building 11, EZP Center Determine Street, CPIP, Barangay
//                   Batino Calamba, Laguna, 4027 Philippines
//                 </td>
//                 <td className="px-6 py-4">803,000</td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-green-500"></div>
//                     Visited
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-yellow-300"></div>
//                     Ongoing
//                   </div>
//                 </td>
//               </tr>

//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   A.S.RIVERA CORPORATION
//                 </td>
//                 <td className="px-6 py-4">End-User</td>
//                 <td className="px-6 py-4">Fabricated Metal</td>
//                 <td className="px-6 py-4">
//                   Block 46, Lot 1, Pampano Street, Barangay Longos Malabon,
//                   Manila, 1470 Philippines
//                 </td>
//                 <td className="px-6 py-4">26,040,000</td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-red-500"></div>
//                     Failed
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex items-center">
//                     <div className="me-2 size-2.5 rounded-full bg-red-500"></div>
//                     Failed
//                   </div>
//                 </td>
//               </tr>
//               {/* Additional rows */}
//             </tbody>
//           </table>
//           <nav
//             className="flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row"
//             aria-label="Table navigation"
//           >
//             <span className="mb-4 block w-full text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
//               Showing{" "}
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 1-10
//               </span>{" "}
//               of{" "}
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 1000
//               </span>
//             </span>
//             <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
//               <li>
//                 <a
//                   href="#"
//                   className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                 >
//                   Previous
//                 </a>
//               </li>
//               {/* Additional pagination links */}
//             </ul>
//           </nav>
//         </div>

//         {/* Suggested Schedule */}
//         <div className="max-w-screen-3xl mx-auto px-8 py-16 lg:px-10 lg:py-20">
//           <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
//             <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white rtl:text-right">
//               Suggested Schedule
//               <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
//                 Feel free to follow this schedule.
//               </p>
//             </caption>
//             <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-all-search"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label htmlFor="checkbox-all-search" className="sr-only">
//                       checkbox
//                     </label>
//                   </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Time
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Activity
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Company
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   07:30 to 08:30 (2024-03-15 )
//                 </td>
//                 <td className="px-6 py-4">🤝Meeting</td>
//                 <td className="px-6 py-4">
//                   EPSON PRECISION (PHILIPPINES), INC.
//                 </td>
//               </tr>

//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   08:30 to 09:30 (2024-03-15 )
//                 </td>
//                 <td className="px-6 py-4">🤝Meeting</td>
//                 <td className="px-6 py-4">
//                   JT INTERNATIONAL ASIA MANUFACTURING CORP.
//                 </td>
//               </tr>

//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   09:40 to 10:40 (2024-03-15 )
//                 </td>
//                 <td className="px-6 py-4">🤝Meeting</td>
//                 <td className="px-6 py-4">FIRST PHILEC, INC.</td>
//               </tr>

//               <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-table-search-1"
//                       type="checkbox"
//                       className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
//                     />
//                     <label
//                       htmlFor="checkbox-table-search-1"
//                       className="sr-only"
//                     >
//                       checkbox
//                     </label>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
//                   11:01 to 12:01 (2024-03-15 )
//                 </td>
//                 <td className="px-6 py-4">🤝Meeting</td>
//                 <td className="px-6 py-4">
//                   ZAMA PRECISION INDUSTRY MANUFACTURING PHILIPPINES, INC.
//                 </td>
//               </tr>
//               {/* Additional rows */}
//             </tbody>
//           </table>
//           <nav
//             className="flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row"
//             aria-label="Table navigation"
//           >
//             <span className="mb-4 block w-full text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
//               Showing{" "}
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 1-10
//               </span>{" "}
//               of{" "}
//               <span className="font-semibold text-gray-900 dark:text-white">
//                 1000
//               </span>
//             </span>
//             <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
//               <li>
//                 <a
//                   href="#"
//                   className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                 >
//                   Previous
//                 </a>
//               </li>
//               {/* Additional pagination links */}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
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