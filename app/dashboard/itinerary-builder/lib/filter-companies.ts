import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import {
  collection,
  Firestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// ADD ADDRESS TEXT instead of COORDS so easier to seeding part
export type CompanyFilter = {
  uuid: string;
  companyAddressUuid: string[];
};

export const filterCompanies = async (
  statesUuid: string[] | null,
  businessModelsUuid: string[] | null,
  categoriesUuid: string[] | null,
  subcategories: string[] | null
  // annualSalesRangesUuid: string[] | null
) => {
  const db = FirebaseServicesInitialization.db as Firestore;
  if (!db) return null;

  const companies: CompanyFilter[] = [];

  const q0s: string[] = [];
  const promises: Promise<void>[] | undefined = statesUuid?.map(
    async (state: string) => {
      const q0 = query(
        collection(db, "companiesAddresses"),
        where("state", "==", state)
      );
      const q0Snapshot = await getDocs(q0);

      q0Snapshot.forEach((doc) => {
        q0s.push(doc.id);
      });
    }
  );

  console.log(q0s);

  if (promises === undefined) {
    return null;
  }
  await Promise.all(promises);

  const q1 = query(
    collection(db, "companies"),
    where("companyAddressesRefs", "array-contains-any", q0s)
  );

  const q2 = query(
    collection(db, "companies"),
    where("businessModelsRefs", "array-contains-any", businessModelsUuid)
  );

  const q3 = query(
    collection(db, "companies"),
    where("categoriesRefs", "array-contains-any", categoriesUuid)
  );

  const q4 = query(
    collection(db, "companies"),
    where("subcategoriesRefs", "array-contains-any", subcategories)
  );

  // const q5 = query(
  //   collection(db, "companies"),
  //   where("annualSalesRefs", "array-contains-any", annualSalesRangesUuid)
  // );

  const [q1Snapshot, q2Snapshot, q3Snapshot, q4Snapshot] = await Promise.all([
    getDocs(q1),
    getDocs(q2),
    getDocs(q3),
    getDocs(q4),
  ]);
  const q1Set = new Set(q1Snapshot.docs.map((doc) => doc.id));
  const q2Set = new Set(q2Snapshot.docs.map((doc) => doc.id));
  const q3Set = new Set(q3Snapshot.docs.map((doc) => doc.id));
  const q4Set = new Set(q4Snapshot.docs.map((doc) => doc.id));

  const intersectedIds = [...q1Set].filter(
    (id) => q2Set.has(id) && q3Set.has(id) && q4Set.has(id)
  );

  q1Snapshot.forEach((doc) => {
    if (intersectedIds.includes(doc.id)) {
      companies.push({
        uuid: doc.id,
        companyAddressUuid: doc.data().companyAddressesRefs,
      });
    }
  });
  return companies;
};
