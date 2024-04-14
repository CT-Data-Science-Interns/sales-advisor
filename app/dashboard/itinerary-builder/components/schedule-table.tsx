"use client";

import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import {
    collection,
    Firestore,
    query,
    where,
    getDocs,
    DocumentData,
    QueryDocumentSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";

export type SelectedClientsUuidAddress = {
  clients: {
    uuid: string;
    // company: string;
    // businessModel: string;
    // subcategory: string;
    address: string;
    // annualSales: number | null;
  }[];
};

const SuggestedSchedule = ({ data }: { data: SelectedClientsUuidAddress }) => {

    const [companyNames, setCompanyNames] = useState<Set<string>>(new Set());

    // useEffect(() => {
    //     // Asynchronous function to fetch company data
    //     const fetchCompanies = async () => {
    //         const db = FirebaseServicesInitialization.db as Firestore;
    //         if (!db) return;

    //         const uuids = data.clients.map(client => client.uuid); // Extracting uuids from data.clients
            
    //         // Constructing the query with proper await for asynchronous operation
    //         const companiesQuery = query(
    //             collection(db, "companies"),
    //             where("name", "array-contains-any", uuids)
    //         );

    //         try {
    //             const companiesSnapshot = await getDocs(companiesQuery); // Awaiting the promise to resolve
    //             // Processing the snapshot with explicit types for each document
    //             const names = new Set(companiesSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => doc.id));
    //             setCompanyNames(names); // Updating state with fetched data
    //         } catch (error) {
    //             console.error("Failed to fetch companies:", error); // Error handling
    //         }
    //     };

    //     fetchCompanies(); // Calling the fetch function
    // }, [data.clients]); // Dependency array to re-run effect when data.clients changes
    

    return (
      <div>
        {/* Scrollable Table Container */}
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-300 rtl:text-right">
            <thead className="bg-white text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Business Model
                </th> */}
                {/* <th scope="col" className="px-6 py-3">
                  Subcategory
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Annual Sales
                </th> */}
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client, index) => (
                <tr
                  key={index}
                  className="border-b odd:bg-gray-50 even:bg-white dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                >
                  {/* <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-300">
                    {client.company}
                  </td> */}
                  {/* <td className="px-6 py-4">{client.businessModel}</td> */}
                  {/* <td className="px-6 py-4">{client.subcategory}</td> */}
                  <td className="px-6 py-4">{client.uuid}</td>
                  <td className="px-6 py-4">{client.address}</td>
                  {/* <td className="px-6 py-4">{client.annualSales}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex flex-wrap items-center justify-between pt-4 md:flex-row"
          aria-label="Table navigation"
        >
          {/* Pagination Content */}
        </nav>
      </div>
    );
};

export default SuggestedSchedule;

// const SuggestedSchedule = ({ data }: { data: SelectedClientsInfo }) => {
//   return (
//     <div>
//       <table className="w-full text-left text-sm text-gray-500 dark:text-gray-300 rtl:text-right">
//         <thead className="bg-white text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-white">
//           <tr>
//             <th scope="col" className="px-6 py-3">
//               Company
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Business Model
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Subcategory
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Address
//             </th>
//             <th scope="col" className="px-6 py-3">
//               Annual Sales
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.clients.map((client, index) => (
//             <tr
//               key={index}
//               className="border-b odd:bg-gray-50 even:bg-white dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
//             >
//               <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-300">
//                 {/* {client.company} */}
//               </td>
//               {/* <td className="px-6 py-4">{client.businessModel}</td> */}
//               {/* <td className="px-6 py-4">{client.subcategory}</td> */}
//               <td className="px-6 py-4">{client.address}</td>
//               <td className="px-6 py-4">{client.uuid}</td>
//               {/* <td className="px-6 py-4">{client.annualSales}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <nav
//         className="flex flex-wrap items-center justify-between pt-4 md:flex-row"
//         aria-label="Table navigation"
//       >
//         <span className="mb-4 block w-full text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
//           Showing <span className="font-semibold text-gray-900 dark:text-gray-300">1-10</span> of{" "}
//           <span className="font-semibold text-gray-900 dark:text-gray-300">1000</span>
//         </span>
//         <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
//           {/* <li>
//             <a
//               href="#"
//               className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
//             >
//               Previous
//             </a>
//           </li> */}
//           {/* Additional pagination links */}
//         </ul>
//       </nav>
//     </div>
//   );
// };
