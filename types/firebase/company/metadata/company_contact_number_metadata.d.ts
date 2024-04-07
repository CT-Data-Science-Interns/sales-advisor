/**
 * Collection path: /companies/{company_uuid}/companyContactNumbersMetadata/{uuid}
 */
export type CompanyContactNumberMetadata = {
    uuid: string; // CompanyContactNumber['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
