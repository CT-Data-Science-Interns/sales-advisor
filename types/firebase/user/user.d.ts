/**
 * Collection path: /users/{uuid}
 */
export type User = {
    uuid: string; // Must be a valid uuid returned by firebase' auth service.
    username: string;
    name: {
        firstName: string;
        lastName: string;
        middleName: string | null;
        suffix: string | null;
    };
    birthdate: Date | null;
    sex: string | null; // From the Sexes enum.
    accountRolesRefs: string[]; // AccountRole['uuid'][]

    emailAddressesRefs: string[]; // UserEmailAddress['uuid'][]
    contactNumbersRefs: string[] | null; // UserContactNumber['uuid'][] | null
    socialMediasRefs: string[] | null; // UserSocialMedia['uuid'][] | null

    managedUsersRefs: string[] | null; // User['uuid'][] | null;
    managedByRefs: string[] | null; // User['uuid'][] | null;
    delegationsRefs: string[] | null; // Delegation['uuid'][] | null;

    itinerariesRefs: string[] | null; // Itinerary['uuid'][] | null;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
