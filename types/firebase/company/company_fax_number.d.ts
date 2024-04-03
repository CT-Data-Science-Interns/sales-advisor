import { Company } from "./company";
import { User } from "./user/user";

/**
 * Collection path: /companiesFaxNumbers/{uuid}
 */
export type CompanyFaxNumber = {
    uuid: string;
    faxNumber: string;
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