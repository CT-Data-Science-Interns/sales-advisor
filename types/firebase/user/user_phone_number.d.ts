/**
 * Collection path: /users/{user_uuid}/phoneNumbers/{userPhoneNumber_uuid}
 */
export type UserPhoneNumber = {
    uuid: string;
    phoneNumber: string;
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