"use client";

import { useEffect, useState } from "react";
import { updateItineraryStatus } from "./update-itinerary-status";

export type ClientListData = {
  clients: {
    id: string;
    company: string;
    businessModel: string;
    subcategory: string;
    address: string;
    annualSales: number;
    visitStatus: string;
    companyRef: string;
  }[];
};

const visitStatusOptions = ["VISITED", "ONGOING", "NOT VISITED"];

const ClientListTable = ({
  data,
  setClientListData,
}: {
  data: ClientListData;
  setClientListData: Function;
}) => {
  const [usedData, setUsedData] = useState<ClientListData>(data);

  const [clientVisitStatus, setClientVisitStatus] = useState<string[]>(
    data.clients.map((client) => client.visitStatus)
  );

  useEffect(() => {
    setUsedData(data);
    setClientVisitStatus(data.clients.map((client) => client.visitStatus));
  }, [data]);

  // Function to handle visit status change
  const handleVisitStatusChange = (
    index: number,
    newValue: string,
    clientId: string
  ) => {
    if (index < 0 || index >= data.clients.length) {
      console.error(`Index ${index} is out of bounds.`);
      return; // Exit early if index is out of bounds
    }

    // Update the visit status in the local state
    const newClientVisitStatus = [...clientVisitStatus];
    newClientVisitStatus[index] = newValue;

    const updatedUsedData = { ...usedData };
    // Update the status property value at the specified index with the new value
    updatedUsedData.clients[index].visitStatus = newValue;

    // setClientVisitStatus(newClientVisitStatus);
    setUsedData(updatedUsedData);

    // Update Firestore with the new visit status
    // This is where you would call your Firestore update function
    // For demonstration, let's log the updated data to console
    console.log(`Updated visit status for client ${index} to ${newValue}`);
  };

  const handleSaveChanges = async () => {
    // Update Firestore with the new visit status for each client
    clientVisitStatus.forEach(async (status, index) => {});

    usedData.clients.forEach((client) => {
      let newStatus: "VISITED" | "NOT VISITED" | "ONGOING" | null = null;

      if (
        client.visitStatus === "VISITED" ||
        client.visitStatus === "NOT VISITED" ||
        client.visitStatus === "ONGOING"
      ) {
        newStatus = client.visitStatus;
      }
      updateItineraryStatus(client.id, client.companyRef, newStatus);
      console.log("ID:", client.id);
      console.log("CompanyRef:", client.companyRef);
      console.log("new status is", client.visitStatus);
    });

    const updatedVisitStatuses = data.clients.map((client, index) => {
      // const clientIndex = index; // Assuming each client has a unique ID
      const status = clientVisitStatus[index];
      // Here you would call your Firestore update function
      // For demonstration, let's log the updated data to console

      return status;
    });

    // Update the clientVisitStatus state with the updated visit statuses
    setClientVisitStatus(updatedVisitStatuses);
  };

  console.log("data is", data);
  console.log("used data is ", usedData);

  return (
    <div>
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-300 rtl:text-right">
        <thead className="bg-white text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-white">
          <tr>
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
          </tr>
        </thead>
        <tbody>
          {usedData.clients.map((client, index) => (
            <tr
              key={index}
              className="border-b odd:bg-gray-50 even:bg-white dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-300">
                {client.company}
              </td>
              <td className="px-6 py-4">{client.id}</td>{" "}
              {/* originally: client.businessModel, palitan ko muna */}
              <td className="px-6 py-4">{client.subcategory}</td>
              <td className="px-6 py-4">{client.address}</td>
              <td className="px-6 py-4">{client.companyRef}</td>{" "}
              {/* {client.annualSales} */}
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {/* {client.visitStatus === "VISITED" ? (
                    <div className="me-2 size-2.5 rounded-full bg-green-500"></div>
                  ) : client.visitStatus === "ONGOING" ? (
                    <div className="me-2 size-2.5 rounded-full bg-yellow-300"></div>
                  ) : (
                    <div className="me-2 size-2.5 rounded-full bg-red-500"></div>
                  )}
                  {client.visitStatus} */}

                  {/* clientVisitStatus[index]} */}
                  <select
                    value={client.visitStatus}
                    onChange={
                      (e) =>
                        handleVisitStatusChange(
                          index,
                          e.target.value,
                          client.company
                        ) // client.company muna, supposed to be ID
                    }
                    className="rounded border px-2 py-1"
                  >
                    {visitStatusOptions.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="py-4 text-right">
              {/* Save button */}
              <button
                onClick={handleSaveChanges}
                className="rounded bg-gray-500 px-4 py-2 text-white"
              >
                Save Changes
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <nav
        className="flex flex-wrap items-center justify-between pt-4 md:flex-row"
        aria-label="Table navigation"
      >
        <span className="mb-4 block w-full text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            1000
          </span>
        </span>
        <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
          <li>
            <a
              href="#"
              className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
            >
              Previous
            </a>
          </li>
          {/* Additional pagination links */}
        </ul>
      </nav>
    </div>
  );
};

export default ClientListTable;
