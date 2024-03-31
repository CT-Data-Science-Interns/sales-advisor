import { SupportedSocialMediaPlatforms } from "@/constants/enums/supported_social_media_platforms";

/**
 * Collection path: /users/{user_uuid}/socialMedias/{userSocialMedia_uuid}
 */
export type UserSocialMedia = {
    uuid: string;
    profileURL: string;
    platform: SupportedSocialMediaPlatforms;
    username: string;
    isVerified: boolean;
    isPublic: boolean;
    isDeleted: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
};
