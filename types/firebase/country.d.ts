/**
 * Collection path: /countries/{uuid}
 */
export type Country = {
    uuid: string;
    name: string;
    code: string;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}