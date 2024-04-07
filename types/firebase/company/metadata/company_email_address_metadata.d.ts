/**
 * Collection path: /companies/{company_uuid}/companyEmailAddressesMetadata/{uuid}
 */
export type CompanyEmailAddressMetadata = {
    uuid: string; // CompanyEmailAddress['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
