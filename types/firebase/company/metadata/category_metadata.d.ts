import { Category } from "../../category"

/**
 * Collection path: /companies/{company_uuid}/categoriesMetadata/{uuid}
 */
export type CategoryMetadata = {
    uuid: Category['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}