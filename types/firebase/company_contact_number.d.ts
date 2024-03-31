import { ContactNumberTypes } from "@/constants/enums/contact_number_types";
import { Company } from "./company/company";

export type CompanyContactNumber = {
    uuid: string;
    number: string;
    ownedByRef: Company['uuid'];
    type: ContactNumberTypes;
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