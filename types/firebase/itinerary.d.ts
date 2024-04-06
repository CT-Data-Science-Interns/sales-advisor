import { CompanyItineraryStatus } from "@/constants/types/company_itinerary_status";
import { Company } from "./company/company";
import { User } from "./user/user";

export type Itinerary = {
    uuid: string;
    userRef: User['uuid'];
    companiesRefs: {
        companyRef: Company['uuid'];
        schedule: Date;
        status: CompanyItineraryStatus;
    }[];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}