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
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}