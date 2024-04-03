import { User } from "./user/user";

/**
 * Collection path: /businessModels/{uuid}
 */
export type BusinessModel = {
    uuid: BusinessModel['uuid'];
    name: string;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}