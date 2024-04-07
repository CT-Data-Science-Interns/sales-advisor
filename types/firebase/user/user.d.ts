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
    birthdate: Date;
    sex: string; // From the Sexes enum.
    accountRolesRefs: string[]; // AccountRole['uuid'][]

    emailAddressesRefs: string[]; // UserEmailAddress['uuid'][]
    contactNumbersRefs: string[]; // UserContactNumber['uuid'][]
    socialMediasRefs: string[]; // UserSocialMedia['uuid'][]

    managedUsersRefs: string[] | null; // User['uuid'][] | null;
    managedByRefs: string[] | null; // User['uuid'][] | null;
    delegationsRefs: string[] | null; // Delegation['uuid'][] | null;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
