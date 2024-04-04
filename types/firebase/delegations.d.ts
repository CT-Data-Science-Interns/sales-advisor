import { AnnualSalesGroups } from "@/constants/enums/annual_sales_groups";
import { BusinessModel } from "./business_model";
import { Category } from "./category";
import { Country } from "./country";
import { State } from "./state";
import { User } from "./user/user";

/**
 * Collection path: /delegations/{uuid}
 */
export type Delegation = {
    uuid: string;
    delegatorRef: User['uuid'];
    delegateeRef: User['uuid'];
    countriesRefs: Country['uuid'][] | null;
    statesRefs: State['uuid'][] | null;
    businessModelsRefs: BusinessModel['uuid'][] | null;
    annualSalesGroupsRefs: AnnualSalesGroups | null;
    categoriesRefs: Category['uuid'][] | null;
    subcategoriesRefs: Category['uuid'][] | null;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}