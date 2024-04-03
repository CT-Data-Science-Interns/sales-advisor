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
    categoriesRefs: Category['uuid'][] | null;
    subcategoriesRefs: Category['uuid'][] | null;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}