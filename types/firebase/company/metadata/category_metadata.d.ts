import { Category } from "../../category"
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/categoriesMetadata/{uuid}
 */
export type CategoryMetadata = {
    uuid: Category['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}