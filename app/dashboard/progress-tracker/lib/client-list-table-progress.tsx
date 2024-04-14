"use client";

import { ClientListData } from "@/components/client-list-table";
import { useState } from "react";

const visitStatusOptions = ["VISITED", "ONGOING", "NOT VISITED"];

const ClientListTable = ({ data }: { data: ClientListData }) => {
  const [clientVisitStatus, setClientVisitStatus] = useState<string[]>(
    data.clients.map((client) => client.visitStatus)
  );

  // Function to handle visit status change
  const handleVisitStatusChange = (
    index: number,
    newValue: string,
    clientId: string
  ) => {
    // Update the visit status in the local state
    const newClientVisitStatus = [...clientVisitStatus];
    newClientVisitStatus[index] = newValue;
    setClientVisitStatus(newClientVisitStatus);

    // Update Firestore with the new visit status
    // This is where you would call your Firestore update function
    // For demonstration, let's log the updated data to console
    console.log(`Updated visit status for client ${index} to ${newValue}`);
  };

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);

  //   const handleSaveChanges = async () => {
  //     try {
  //       // Get a reference to the Firestore database

  //       // Iterate through all documents in the "itineraries" collection
  //       const querySnapshot = await getDocs(collection(db, "itineraries"));
  //       querySnapshot.forEach(async (doc) => {
  //         // Get the document data
  //         const data = doc.data();

  //         // Check if the document's ID matches the client's ID
  //         if (data.ID === clientId) {
  //           // Get the reference to the document
  //           const docRef = doc(db, "itineraries", doc.id);

  //           // Update the "companyRef.status" field with the updated visit status
  //           await updateDoc(docRef, {
  //             "companyRef.status": updatedVisitStatus
  //           });

  //           console.log(`Updated visit status for client ${clientId} to ${updatedVisitStatus}`);
  //         }
  //       });

  //       console.log("Visit status updated successfully.");
  //     } catch (error) {
  //       console.error("Error updating visit status:", error);
  //     }
  //   };

  const handleSaveChanges = async () => {
    // Update Firestore with the new visit status for each client
    clientVisitStatus.forEach(async (status, index) => {
      // const clientId = data.clients[index].ID; // Assuming each client has a unique ID
      // console.log("id is", clientId);
      // Here you would call your Firestore update function
      // For demonstration, let's log the updated data to console
      //   const itineraries = doc(db, "itineraries", clientId);
      //   // Set the "capital" field of the city 'DC'
      //   await updateDoc(itineraries, {
      //     status,
      //   });
      // console.log(`Updating visit status for client ${clientId} to ${status}`);
    });

    // const updatedClients = data.clients.map((client) => {
    //   if (client.ID === clientId) {
    //     return { ...client, visitStatus: newValue };
    //   }
    //   return client;
    // });
    // const updatedVisitStatuses = updatedClients.map(
    //   (client) => client.visitStatus
    // );

    // // Set the updated visit status array
    // setClientVisitStatus(updatedVisitStatuses);

    const updatedVisitStatuses = data.clients.map((client, index) => {
      const clientIndex = index; // Assuming each client has a unique ID
      const status = clientVisitStatus[index];
      // Here you would call your Firestore update function
      // For demonstration, let's log the updated data to console

      console.log(
        `Updating visit status for client ${clientIndex} to ${status}`
      );
      return status;
    });

    // Update the clientVisitStatus state with the updated visit statuses
    setClientVisitStatus(updatedVisitStatuses);
  };

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
          {data.clients.map((client, index) => (
            <tr
              key={index}
              className="border-b odd:bg-gray-50 even:bg-white dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-300">
                {client.company}
              </td>
              <td className="px-6 py-4">{client.businessModel}</td>
              <td className="px-6 py-4">{client.subcategory}</td>
              <td className="px-6 py-4">{client.address}</td>
              <td className="px-6 py-4">{client.annualSales}</td>
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
                  <select
                    value={clientVisitStatus[index]}
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
