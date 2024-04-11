import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import {
  collection,
  Firestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Company } from "@/types/firebase/company/company";

// ADD ADDRESS TEXT instead of COORDS so easier to seeding part
type CompanyFilter = {
  uuid: string;
  companyAddressUuid: string[];
};

export const filterCompanies = async (
  statesUuid: string[] | null,
  businessModelsUuid: string[] | null,
  categoriesUuid: string[] | null,
  subcategories: string[] | null,
  annualSalesRangesUuid: string[] | null
) => {
  const db = FirebaseServicesInitialization.db as Firestore;
  if (!db) return null;
  const companies: CompanyFilter[] = [];

  // Multiple array-contains-any queries are not supported
  // https://firebase.google.com/docs/firestore/query-data/queries#in_not-in_and_array-contains-any
  // My workarounds so far still not equivalent to SQL-like queries
  const q = query(
    collection(db, "companies"),
    // where("statesRefs", "array-contains-any", statesUuid)
    where("businessModelsRefs", "array-contains-any", businessModelsUuid)
    // where("categoriesRefs", "array-contains-any", categoriesUuid),
    // where("subcategoriesRefs", "array-contains-any", subcategories),
    // where("annualSalesRefs", "array-contains-any", annualSalesRangesUuid),
    // where("status", "==", "AVAILABLE")
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Company;
    companies.push({
      uuid: doc.id,
      companyAddressUuid: data.companyAddressesRefs,
    });
  });
  return companies;
};
