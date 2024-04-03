import { Company } from "./company";

/**
 * Collection path: /companiesWebsites/{uuid}
 */
export type CompanyWebsite = {
    uuid: string;
    url: string;
    companyRef: Company['uuid'];
    isPrimary: boolean;
    isVerified: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}