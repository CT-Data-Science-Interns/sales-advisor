/**
 * Collection path: /companies/{company_uuid}/categoriesMetadata/{uuid}
 */
export type CategoryMetadata = {
    uuid: string; // Category['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
