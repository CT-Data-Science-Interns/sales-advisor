/**
 * Collection path: /companies/{uuid}
 */
export type Company = {
    uuid: string;
    name: string;
    description: string;

    companyAddressesRefs: string[]; // CompanyAddress['uuid'][]
    contactNumbersRefs: string[] | null; // CompanyContactNumber['uuid'][] | null
    faxNumbersRefs: string[] | null; // CompanyFaxNumber['uuid'][] | null
    websitesRefs: string[] | null; // CompanyWebsite['uuid'][] | null
    emailAddressesRefs: string[] | null; // CompanyEmailAddress['uuid'][] | null

    businessModelsRefs: string[]; // BusinessModel['uuid'][]
    categoriesRefs: string[]; // Category['uuid'][]
    subcategoriesRefs: string[]; // Subcategory['uuid'][]

    employeesCountsRefs: string[] | null; // EmployeeCount['uuid'][] | null
    annualSalesRefs: string[] | null; // AnnualSale['uuid'][] | null

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
