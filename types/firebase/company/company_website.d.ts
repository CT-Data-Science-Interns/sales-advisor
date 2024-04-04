import { Company } from "./company";
import { User } from "./user/user";

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
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}