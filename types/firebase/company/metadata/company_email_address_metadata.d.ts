import { CompanyEmailAddress } from "../company_email_address";

export type CompanyEmailAddressMetadata = {
    uuid: CompanyEmailAddress['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}