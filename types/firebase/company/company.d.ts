/**
 * Collection path: /companies/{uuid}
 */
export type Company = {
    uuid: string;
    name: string;
    description: string;

    companyAddressesRefs: string[]; // CompanyAddress['uuid'][]
    contactNumbersRefs: string[]; // CompanyContactNumber['uuid'][]
    faxNumbersRefs: string[]; // CompanyFaxNumber['uuid'][]
    websitesRefs: string[]; // CompanyWebsite['uuid'][]
    emailAddressesRefs: string[]; // CompanyEmailAddress['uuid'][]

    businessModelsRefs: string[]; // BusinessModel['uuid'][]
    categoriesRefs: string[]; // Category['uuid'][]
    subcategoriesRefs: string[]; // Subcategory['uuid'][]

    employeesCountsRefs: string[]; // EmployeeCount['uuid'][]
    annualSalesRefs: string[]; // AnnualSale['uuid'][]

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
