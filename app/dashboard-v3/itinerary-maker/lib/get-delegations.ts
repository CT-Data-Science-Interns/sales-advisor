import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import { Delegation } from "@/types/firebase/delegations";
import { State } from "@/types/firebase/state";
import { BusinessModel } from "@/types/firebase/business_model";
import { Category } from "@/types/firebase/category";
import { Subcategory } from "@/types/firebase/subcategory";
import { AnnualSalesGroups } from "@/core/enums/annual_sales_groups.enum";
import {
  collection,
  Firestore,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from "firebase/firestore";

type KeyValuePair = {
  uuid: string;
  value: string;
};

export type DelegationObject = {
  delegatedStates: KeyValuePair[];
  delegatedBusinessModels: KeyValuePair[];
  delegatedCategories: KeyValuePair[];
  delegatedSubcategories: KeyValuePair[];
  delegatedAnnualSalesRanges: AnnualSalesGroups[];
};

export const getDelegations = async (user: string) => {
  const db = FirebaseServicesInitialization.db as Firestore;
  if (!db) return null;

  const delegatedStates: KeyValuePair[] = [];
  const delegatedBusinessModels: KeyValuePair[] = [];
  const delegatedCategories: KeyValuePair[] = [];
  const delegatedSubcategories: KeyValuePair[] = [];
  const delegatedAnnualSalesRanges: AnnualSalesGroups[] = [];

  const q = query(
    collection(db, "delegations"),
    where("delegateeRef", "==", user)
  );
  const querySnapshot = await getDocs(q);
  if (!querySnapshot) {
    return null;
  }
  querySnapshot?.forEach((document) => {
    const data = document.data() as Delegation;
    // Get all delegated states
    if (data.statesRefs) {
      data.statesRefs.forEach(async (state) => {
        const stateRef = doc(db, "states", state);
        const stateDoc = await getDoc(stateRef);
        const stateData = stateDoc.data() as State;

        delegatedStates.push({
          uuid: state,
          value: stateData.name,
        });
      });
    }
    // Get all delegated business models
    if (data.businessModelsRefs) {
      data.businessModelsRefs.forEach(async (businessModel) => {
        const businessModelRef = doc(db, "businessModels", businessModel);
        const businessModelDoc = await getDoc(businessModelRef);
        const businessModelData = businessModelDoc.data() as BusinessModel;

        delegatedBusinessModels.push({
          uuid: businessModel,
          value: businessModelData.name,
        });
      });
    }
    // Get all delegated categories
    if (data.categoriesRefs) {
      data.categoriesRefs.forEach(async (category) => {
        const categoryRef = doc(db, "categories", category);
        const categoryDoc = await getDoc(categoryRef);
        const categoryData = categoryDoc.data() as Category;

        delegatedCategories.push({
          uuid: category,
          value: categoryData.name,
        });
      });
    }
    // Get all delegated subcategories
    if (data.subcategoriesRefs) {
      data.subcategoriesRefs.forEach(async (subcategory) => {
        const subcategoryRef = doc(db, "subcategories", subcategory);
        const subcategoryDoc = await getDoc(subcategoryRef);
        const subcategoryData = subcategoryDoc.data() as Subcategory;

        delegatedSubcategories.push({
          uuid: subcategory,
          value: subcategoryData.name,
        });
      });
    }

    // Get all delegated annual sales group
    if (data.annualSalesGroupsRefs) {
      delegatedAnnualSalesRanges.push(
        data.annualSalesGroupsRefs as AnnualSalesGroups
      );
    }
  });

  return {
    delegatedStates,
    delegatedBusinessModels,
    delegatedCategories,
    delegatedSubcategories,
    delegatedAnnualSalesRanges,
  };
};
