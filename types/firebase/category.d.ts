import { User } from "./user/user";

/**
 * Collection path: /categories/{uuid}
 */
export type Category = {
    uuid: Category['uuid'];
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}