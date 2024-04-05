import { User } from "./user/user";


/**
 * Collection path: /subcategories/{uuid}
 */
export type Subcategory = {
    uuid: Subcategory['uuid'];
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}