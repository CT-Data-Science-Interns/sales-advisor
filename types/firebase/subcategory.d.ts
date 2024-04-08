/**
 * Collection path: /subcategories/{uuid}
 */
export type Subcategory = {
    uuid: string; // SubcategoryMetadata['uuid']
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
