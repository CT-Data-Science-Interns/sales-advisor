/**
 * Collection path: /accountRoles/{uuid}
 */
export type AccountRole = {
    uuid: string;
    fullName: string; // e.g., 'Administrator'
    shortName: string; // e.g., 'admin'
    weight: number;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
};
