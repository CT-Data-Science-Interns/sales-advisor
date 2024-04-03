import { CompanyWebsite } from "../company_website";

/**
 * Collection path: /companies/{company_uuid}/companyWebsitesMetadata/{uuid}
 */
export type CompanyWebsiteMetadata = {
    uuid: CompanyWebsite['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}