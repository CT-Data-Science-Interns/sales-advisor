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
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
};
