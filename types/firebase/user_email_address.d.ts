/**
 * Collection path: /users/{user_uuid}/emailAddresses/{userEmailAddress_uuid}
 */
export type UserEmailAddress = {
    uuid: string;
    email: string;
    isPrimary: boolean;
    isSecondary: boolean;
    isVerified: boolean;
    isPublic: boolean;
    isDeleted: boolean;

    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}
