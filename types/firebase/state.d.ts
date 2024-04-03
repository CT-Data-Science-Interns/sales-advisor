import { Country } from "./country";

/**
 * Collection path: /states/{uuid}
 */
export type State = {
    uuid: string;
    name: string;
    countryRef: Country['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}