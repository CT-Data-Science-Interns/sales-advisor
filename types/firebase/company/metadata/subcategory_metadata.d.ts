import { Subcategory } from "../../subcategory";

/**
 * Collection path: /companies/{company_uuid}/subcategoriesMetadata/{uuid}
 */
export type SubcategoryMetadata = {
    uuid: Subcategory['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}