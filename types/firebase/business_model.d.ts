/**
 * Collection path: /businessModels/{uuid}
 */
export type BusinessModel = {
    uuid: BusinessModel['uuid'];
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}