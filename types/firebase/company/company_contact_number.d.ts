import { ContactNumberTypes } from "@/constants/enums/contact_number_types";
import { Company } from "./company";
import { User } from "./user/user";

/**
 * Collection path: /companiesContactNumbers/{uuid}
 */
export type CompanyContactNumber = {
    uuid: string;
    number: string;
    companyRef: Company['uuid'];
    type: ContactNumberTypes;
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