import { AccountRole } from "../../account_role";
import { User } from "./user/user";

/**
 * Collection path: /users/{user_uuid}/userAccountRolesMetadata/{uuid}
 */
export type UserAccountRole = {
    uuid: AccountRole['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}