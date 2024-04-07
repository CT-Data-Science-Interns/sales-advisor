/**
 * Collection path: /usersSocialMedias/{uuid}
 */
export type UserSocialMedia = {
    uuid: string;
    profileURL: string;
    userRef: string; // User['uuid']
    platform: string; // From the SupportedSocialMediaPlatforms enum.
    username: string;
    isVerified: boolean;
    isPublic: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
};
