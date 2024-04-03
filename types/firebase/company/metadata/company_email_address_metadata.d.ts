import { CompanyEmailAddress } from "../company_email_address";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/companyEmailAddressesMetadata/{uuid}
 */
export type CompanyEmailAddressMetadata = {
    uuid: CompanyEmailAddress['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}