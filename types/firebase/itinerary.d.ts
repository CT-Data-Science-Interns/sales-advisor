export type Itinerary = {
    uuid: string;
    userRef: string; // User['uuid']
    companiesRefs: {
        companyRef: string; // Company['uuid']
        schedule: Date;
        status: string; // From the CompanyItineraryStatus enum.
    }[];

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
