// import firebase from "firebase/app"; // Assuming you are using Firebase Firestore
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/configs/firebase_config";

// Function to update itinerary status
export async function updateItineraryStatus(
  itineraryUUID: string,
  companyUUID: string,
  newStatus: "VISITED" | "NOT VISITED" | "ONGOING" | null
) {
  //   const db = firebase.firestore();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    // Step 2: Find the itinerary document
    const itineraryRef = doc(db, "itineraries", itineraryUUID);
    const itineraryDoc = await getDoc(itineraryRef);

    if (!itineraryDoc.exists) {
      throw new Error("Itinerary not found");
    }

    // Step 3: Update the status for the desired company
    const companiesRefs = itineraryDoc.data()?.companiesRefs || [];
    const updatedCompaniesRefs = companiesRefs.map((companyRef: any) => {
      if (companyRef.companyRef === companyUUID) {
        return { ...companyRef, status: newStatus };
      }
      return companyRef;
    });

    // Step 4: Save the updated document back to the database
    await updateDoc(itineraryRef, { companiesRefs: updatedCompaniesRefs });
    console.log("Itinerary status updated successfully");
  } catch (error) {
    console.error("Error updating itinerary status:", error);
  }
}
