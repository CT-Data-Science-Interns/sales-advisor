/**
 * Collection path: /companies/{company_uuid}/companyFaxNumbersMetadata/{uuid}
 */
export type CompanyFaxNumberMetadata = {
    uuid: string; // CompanyFaxNumber['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
