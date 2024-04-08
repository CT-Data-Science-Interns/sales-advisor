/**
 * Collection path: /users/{user_uuid}/accountRolesMetadata/{uuid}
 */
export type AccountRoleMetadata = {
    uuid: string; // AccountRole['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
