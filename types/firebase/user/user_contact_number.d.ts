import { ContactNumberTypes } from "@/constants/enums/contact_number_types";
import { User } from "./user";

/**
 * Collection path: usersContactNumbers/{uuid}
 */
export type UserContactNumber = {
    uuid: string;
    phoneNumber: string;
    userRef: User['uuid'];
    type: ContactNumberTypes;
    isPrimary: boolean;
    isSecondary: boolean;
    isVerified: boolean;
    isPublic: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}