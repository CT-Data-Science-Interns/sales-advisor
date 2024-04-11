import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Auth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "@/configs/firebase_config";
import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import { initializeApp } from "firebase/app";
import { Itinerary } from "@/types/firebase/itinerary";
import { filterItinerariesByDate } from "./filter-itinerary"; // Import functions
import { handleStatusChange } from "./update-itinerary";

interface ItineraryListProps {
  startDate: Date;
  endDate: Date;
}

const ItineraryList: React.FC<ItineraryListProps> = ({
  startDate,
  endDate,
}) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [filteredItineraries, setFilteredItineraries] = useState([]); // Fix type

  useEffect(() => {
    const fetchItineraries = async (uid: string) => {
      try {
        const itineraryQuery = query(
          collection(db, "itineraries"),
          where("userRef", "==", uid)
        );

        const querySnapshot = await getDocs(itineraryQuery);
        const itinerariesData = querySnapshot.docs.map(
          (doc) => doc.data() as Itinerary
        ); // Fix type
        setItineraries(itinerariesData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    const auth = FirebaseServicesInitialization.auth as Auth;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        const uid = "9nBLeN62Zo4s1Y74Phez"; // Temporarily
        fetchItineraries(uid);
      }
    });
  }, []);

  useEffect(() => {
    const filteredCompanies = filterItinerariesByDate(
      itineraries,
      startDate,
      endDate
    ); // Use the filtering function
    setFilteredItineraries(filteredCompanies);
  }, [itineraries, startDate, endDate]);

  // const [companyReferences, setCompanyReferences] = useState<string[]>([]); // Fix type

  // useEffect(() => {
  //   const companyRefs = extractCompanyReferences(filteredItineraries); // Use the extraction function
  //   setCompanyReferences(companyRefs);
  // }, [filteredItineraries]);

  // Other code...

  return (
    <div className="relative shadow-md sm:rounded-lg">
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white rtl:text-right">
            Client List
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Overview of the clients.
            </p>
          </caption>
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Business Model
              </th>
              <th scope="col" className="px-6 py-3">
                Subcategory
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Annual Sales
              </th>
              <th scope="col" className="px-6 py-3">
                Visit Status
              </th>
              <th scope="col" className="px-6 py-3">
                Deal Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredItineraries.map((itineraryData, index) => (
              <tr
                key={`${index}`}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${index}`}
                      type="checkbox"
                      className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${index}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {itineraryData.companyRef}
                </td>
                <td className="px-6 py-4">{itineraryData.uuid}</td>
                <td className="px-6 py-4">
                  {new Date(
                    itineraryData.schedule.start.seconds * 1000
                  ).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {new Date(
                    itineraryData.schedule.end.seconds * 1000
                  ).toLocaleString()}
                </td>
                <td>{itineraryData.companyRef}</td>
                <td>
                  <select
                    value={itineraryData.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <option value="ONGOING">ONGOING</option>
                    <option value="VISITED">VISITED</option>
                    <option value="NOT VISITED">NOT VISITED</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItineraryList;
