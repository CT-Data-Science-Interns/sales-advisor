import { CompanyWebsite } from "../company_website";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/companyWebsitesMetadata/{uuid}
 */
export type CompanyWebsiteMetadata = {
    uuid: CompanyWebsite['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}