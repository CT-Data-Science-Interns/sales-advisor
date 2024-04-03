import { SupportedSocialMediaPlatforms } from "@/constants/enums/supported_social_media_platforms";
import { User } from "./user";

/**
 * Collection path: /usersSocialMedias/{uuid}
 */
export type UserSocialMedia = {
    uuid: string;
    profileURL: string;
    userRef: User['uuid'];
    platform: SupportedSocialMediaPlatforms;
    username: string;
    isVerified: boolean;
    isPublic: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
};
