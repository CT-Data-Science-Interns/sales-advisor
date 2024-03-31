/**
 * Collection path: /users/{user_uuid}/accountRoles/{userAccountRole_uuid}
 */
export type UserAccountRole = {
    uuid: string; // Must be a valid accountRole_uuid.

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}