/**
 * Collection path: /usersEmailAddresses/{uuid}
 */
export type UserEmailAddress = {
    uuid: string;
    email: string;
    userRef: string; // User['uuid']
    isPrimary: boolean;
    isSecondary: boolean;
    isVerified: boolean;
    isPublic: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
