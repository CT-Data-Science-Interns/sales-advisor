/**
 * Collection path: /companies/{company_uuid}/subcategoriesMetadata/{uuid}
 */
export type SubcategoryMetadata = {
    uuid: string; // Subcategory['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
