import { Subcategory } from "../subcategory";

export type CompanySubcategory = {
    uuid: Subcategory['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}