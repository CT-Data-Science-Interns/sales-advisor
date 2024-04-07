/**
 * Collection path: /companies/{company_uuid}/businessModelsMetadata/{uuid}
 */
export type BusinessModelMetadata = {
    uuid: string; // BusinessModel['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
