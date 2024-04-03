import { Company } from "./company";

export type CompanyFaxNumber = {
    uuid: string;
    faxNumber: string;
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