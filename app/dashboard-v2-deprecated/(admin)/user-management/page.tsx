// "use client";

// import FormSelect from "@/components/form-select";
// import React, { useState } from "react";

// const Page = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [salesperson, setSalesPerson] = useState<string>();

//   // eslint-disable-next-line no-unused-vars
//   const [country, setCountry] = useState<string>();
//   // eslint-disable-next-line no-unused-vars
//   const [state, setState] = useState<string>();
//   // eslint-disable-next-line no-unused-vars
//   const [businessModel, setBusinessModel] = useState<string>();
//   // eslint-disable-next-line no-unused-vars
//   const [businessCategory, setBusinessCategory] = useState<string>();

//   return (
//     <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
//       <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">User Management</h1>

//       <div className="mb-8 rounded-lg p-6 shadow">
//         <FormSelect
//           title="Salesperson:"
//           onSelectChange={setSalesPerson}
//           options={["Salesperson 1", "Salesperson 2", "Salesperson 3"]}
//         />
//       </div>

//       {/* Delegations dropdown */}
//       <div className="mb-8 rounded-lg p-6 shadow">
//         <h5 className="mb-6 me-1 text-xl font-bold text-gray-900 dark:text-white">Delegations</h5>
//         <div className="mb-6 grid gap-6 sm:grid-cols-2">
//           <FormSelect
//             title="Country:"
//             onSelectChange={setCountry}
//             options={["Country 1", "Country 2", "Country 3"]}
//           />
//           <FormSelect
//             title="State:"
//             onSelectChange={setState}
//             options={["State 1", "State 2", "State 3"]}
//           />
//           <FormSelect
//             title="Business Model:"
//             onSelectChange={setBusinessModel}
//             options={["Business Model 1", "Business Model 2", "Business Model 3"]}
//           />
//           <FormSelect
//             title="Business Category:"
//             onSelectChange={setBusinessCategory}
//             options={["Business Category 1", "Business Category 2", "Business Category 3"]}
//           />
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="button"
//             className="me-4 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
//           >
//             Reset
//           </button>
//           <button
//             type="button"
//             className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Apply
//           </button>
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
