import { CompanyEmailAddress } from "../company_email_address";

/**
 * Collection path: /companies/{company_uuid}/companiesEmailAddressesMetadata/{uuid}
 */
export type CompanyEmailAddressMetadata = {
    uuid: CompanyEmailAddress['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}