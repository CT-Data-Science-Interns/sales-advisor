/**
 * Collection path: /countries/{uuid}
 */
export type Country = {
    uuid: string;
    name: string;
    code: string;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
