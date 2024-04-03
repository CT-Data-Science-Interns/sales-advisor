import { AccountRole } from "../../account_role";

/**
 * Collection path: /users/{user_uuid}/userAccountRolesMetadata/{uuid}
 */
export type UserAccountRole = {
    uuid: AccountRole['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}