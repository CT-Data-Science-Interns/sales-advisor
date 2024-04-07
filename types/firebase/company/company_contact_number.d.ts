/**
 * Collection path: /companiesContactNumbers/{uuid}
 */
export type CompanyContactNumber = {
    uuid: string;
    number: string;
    companyRef: string; // Company['uuid']
    type: string; // From the ContactNumberTypes enum.
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
