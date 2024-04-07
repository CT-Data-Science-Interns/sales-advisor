/**
 * Collection path: usersContactNumbers/{uuid}
 */
export type UserContactNumber = {
    uuid: string;
    phoneNumber: string;
    userRef: string; // User['uuid']
    type: string; // From the ContactNumberTypes enum.
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
