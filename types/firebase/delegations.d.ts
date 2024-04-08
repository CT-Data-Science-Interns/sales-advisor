/**
 * Collection path: /delegations/{uuid}
 */
export type Delegation = {
    uuid: string;
    delegatorRef: string; // User['uuid']
    delegateeRef: string; // User['uuid']
    countriesRefs: string[] | null; // Country['uuid'][] | null
    statesRefs: string[] | null; // State['uuid'][] | null
    businessModelsRefs: string[] | null; // BusinessModel['uuid'][] | null
    annualSalesGroupsRefs: string | null; // From the AnnualSalesGroups enum.
    categoriesRefs: string[] | null; // Category['uuid'][] | null
    subcategoriesRefs: string[] | null; // Subcategory['uuid'][] | null

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
