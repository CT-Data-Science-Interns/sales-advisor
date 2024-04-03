import { Company } from "./company";
import { User } from "./user/user";

/**
 * Collection path: /companiesEmailAddresses/{uuid}
 */
export type CompanyEmailAddress = {
    uuid: string;
    email: string;
    companyRef: Company['uuid'];
    isPrimary: boolean;
    isVerified: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}