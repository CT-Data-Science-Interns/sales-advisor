/**
 * Collection path: /states/{uuid}
 */
export type State = {
    uuid: string;
    name: string;
    countryRef: string; // Country['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
