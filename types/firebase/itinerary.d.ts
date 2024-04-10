/**
 * Collection path: /itineraries/{uuid}
 */
export type Itinerary = {
    uuid: string;
    userRef: string; // User['uuid']
    companiesRefs: {
        companyRef: string; // Company['uuid']
        schedule: {
            start: Date,
            end: Date,
        };
        status: "VISITED" | "NOT VISITED" | "STATUS"; // From the CompanyItineraryStatus enum.
    }[];

    // group_id: string;
    // startDate: Date;
    // endDate: Date;

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
