import { CompanyContactNumber } from "../company_contact_number";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/companyContactNumbersMetadata/{uuid}
 */
export type CompanyContactNumberMetadata = {
    uuid: CompanyContactNumber['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}