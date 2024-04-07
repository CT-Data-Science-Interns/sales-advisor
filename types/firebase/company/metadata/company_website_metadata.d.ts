/**
 * Collection path: /companies/{company_uuid}/companyWebsitesMetadata/{uuid}
 */
export type CompanyWebsiteMetadata = {
    uuid: string; // CompanyWebsite['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
