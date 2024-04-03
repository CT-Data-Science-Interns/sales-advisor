import { Country } from "./country";
import { User } from "./user/user";

/**
 * Collection path: /states/{uuid}
 */
export type State = {
    uuid: string;
    name: string;
    countryRef: Country['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}