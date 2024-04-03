import { Subcategory } from "../../subcategory";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/subcategoriesMetadata/{uuid}
 */
export type SubcategoryMetadata = {
    uuid: Subcategory['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}