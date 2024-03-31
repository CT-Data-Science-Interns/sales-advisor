import { Company } from "./company/company";

export type CompanyEmailAddress = {
    uuid: string;
    email: string;
    ownedByRef: Company['uuid'];
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