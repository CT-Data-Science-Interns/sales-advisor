import { Company } from "./company";

/**
 * Collection path: /companiesFaxNumbers/{uuid}
 */
export type CompanyFaxNumber = {
    uuid: string;
    faxNumber: string;
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