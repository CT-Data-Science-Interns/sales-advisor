import { Company } from "./company";

/**
 * Collection path: /companiesEmailAddresses/{uuid}
 */
export type CompanyEmailAddress = {
    uuid: string;
    email: string;
    companiesRefs: Company['uuid'][];
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