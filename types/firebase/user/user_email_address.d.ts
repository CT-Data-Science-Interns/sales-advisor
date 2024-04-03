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
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}
