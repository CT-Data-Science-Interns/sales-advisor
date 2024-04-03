import { User } from "./user/user";

/**
 * Collection path: /countries/{uuid}
 */
export type Country = {
    uuid: string;
    name: string;
    code: string;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}