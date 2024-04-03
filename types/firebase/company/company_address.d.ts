import { Country } from "../country";
import { State } from "../state";
import { Company } from "./company";

/**
 * Collection path: /companiesAddresses/{uuid}
 */
export type CompanyAddress = {
    uuid: string;
    country: Country['uuid'];
    state: State['uuid'];
    coordinates: {
        latitude: number;
        longitude: number;
    };
    companyRef: Company['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}