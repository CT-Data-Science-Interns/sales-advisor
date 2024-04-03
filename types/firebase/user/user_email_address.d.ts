import { User } from "./user";

/**
 * Collection path: /usersEmailAddresses/{uuid}
 */
export type UserEmailAddress = {
    uuid: string;
    email: string;
    userRef: User['uuid'];
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
