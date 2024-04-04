import { Country } from "../country";
import { State } from "../state";
import { Company } from "./company";
import { User } from "./user/user";

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
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}