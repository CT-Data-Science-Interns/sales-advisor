/**
 * Collection path: /businessModels/{uuid}
 */
export type BusinessModel = {
    uuid: string; // BusinessModelMetadata['uuid']
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
