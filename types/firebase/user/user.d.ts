import { Sexes } from "@/constants/enums/sexes";
import { AccountRole } from "../account_role";
import { UserEmailAddress } from "./user_email_address";
import { UserContactNumber } from "./user_contact_number";
import { UserSocialMedia } from "./user_social_media";
import { Delegation } from "../delegations";

/**
 * Collection path: /users/{uuid}
 */
export type User = {
    uuid: string; // Must be a valid uuid returned by firebase' auth service.
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

    managedUsersRefs: User['uuid'][] | null;
    managedByRefs: User['uuid'][] | null;
    delegationsRefs: Delegation['uuid'][] | null;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}
