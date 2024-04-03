/**
 * Collection path: /categories/{uuid}
 */
export type Category = {
    uuid: Category['uuid'];
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}