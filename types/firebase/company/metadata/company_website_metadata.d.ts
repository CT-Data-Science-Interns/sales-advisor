import { CompanyWebsite } from "../company_website";

export type CompanyWebsiteMetadata = {
    uuid: CompanyWebsite['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}