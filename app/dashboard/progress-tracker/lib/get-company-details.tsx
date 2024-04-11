// Function to fetch companies based on itinerary references
// Idea: Store documents that have uid equal to any companyRef value found in itineraries collection
// Make sure, it is same order with its itinerary reference
// Use that to output company details (desription, etc.) in table

// "use client";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   query,
//   where,
// } from "firebase/firestore";
// import firebaseConfig from "@/configs/firebase_config";
// import { getFirestore } from "firebase/firestore";

// Initialize Firebase app and Firestore
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const getCompanyDetails = async () => {
//   try {
//     const itinerariesQuerySnapshot = await getDocs(
//       collection(db, "itineraries")
//     );

//     if (!itinerariesQuerySnapshot) {
//       console.error("No itineraries found");
//       return [];
//     }

//     const companyRefMap = new Map(); // Initialize the map

//     itinerariesQuerySnapshot.forEach((doc) => {
//       const itineraryData = doc.data();
//       console.log("Itinerary Data: ", itineraryData); // Log the itineraryData

//       if (itineraryData.companiesRefs) {
//         itineraryData.companiesRefs.forEach((companyRefMapItem) => {
//           // Assuming companyRefMapItem is an object with keys 'companyRef' and 'index'
//           const ref = companyRefMapItem.companyRef;
//           const index = companyRefMapItem.index;
//           companyRefMap.set(ref, index); // Store index of companyRef in the map
//         });
//       }
//     });

//     const companyRefs = [...companyRefMap.keys()]; // Convert keys to an array
//     if (companyRefs.length > 0) {
//       // Only query if the array is not empty
//       const companiesQuerySnapshot = await getDocs(
//         query(collection(db, "companies"), where("uid", "in", companyRefs))
//       );

//       // Step 5: Sort fetched companies based on their index in the map
//       const sortedCompanies = [];
//       companiesQuerySnapshot.forEach((doc) => {
//         const companyData = doc.data();
//         const index = companyRefMap.get(companyData.uid);
//         sortedCompanies[index] = companyData;
//       });

//       return sortedCompanies;
//     } else {
//       return []; // Return an empty array if companyRefs is empty
//     }
//   } catch (error) {
//     console.error("Error fetching companies from itineraries: ", error);
//     return [];
//   }
// };

// const Page = () => {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedCompanies = await getCompanyDetails();
//         console.log("the companies are", fetchedCompanies);
//         setCompanies(fetchedCompanies);
//       } catch (error) {
//         console.error("Error fetching companies: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Hello</h1>
//       {/* Render companies here */}
//     </div>
//   );
// };

// export default Page;
