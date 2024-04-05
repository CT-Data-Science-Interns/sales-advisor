import { User } from "./user/user";

/**
 * Collection path: /accountRoles/{uuid}
 */
export type AccountRole = {
    uuid: string;
    fullName: string; // e.g., 'Administrator'
    shortName: string; // e.g., 'admin'
    weight: number;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
};
