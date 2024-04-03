import { Sexes } from "@/constants/enums/sexes";
import { AccountRole } from "../account_role";
import { UserEmailAddress } from "./user_email_address";
import { UserContactNumber } from "./user_contact_number";
import { UserSocialMedia } from "./user_social_media";

/**
 * Collection path: /users/{uuid}
 */
export type User = {
    uuid: string;
    username: string;
    name: {
        firstName: string;
        lastName: string;
        middleName: string | null;
        suffix: string | null;
    };
    birthdate: Date;
    sex: Sexes;
    accountRolesRefs: AccountRole['uuid'][];

    emailAddressesRefs: UserEmailAddress['uuid'][];
    contactNumbersRefs: UserContactNumber['uuid'][];
    socialMediasRefs: UserSocialMedia['uuid'][];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}