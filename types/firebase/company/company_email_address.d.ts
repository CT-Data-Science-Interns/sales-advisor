/**
 * Collection path: /companiesEmailAddresses/{uuid}
 */
export type CompanyEmailAddress = {
    uuid: string;
    email: string;
    companyRef: string; // Company['uuid']
    isPrimary: boolean;
    isVerified: boolean;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
