/**
 * Collection path: /companiesAddresses/{uuid}
 */
export type CompanyAddress = {
    uuid: string;
    country: string; // Country['uuid']
    state: string; // State['uuid']
    coordinates: {
        latitude: number;
        longitude: number;
    };
    companyRef: string; // Company['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
