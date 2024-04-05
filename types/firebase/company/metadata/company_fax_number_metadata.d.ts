import { CompanyFaxNumber } from "../company_fax_number";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/companyFaxNumbersMetadata/{uuid}
 */
export type CompanyFaxNumberMetadata = {
    uuid: CompanyFaxNumber['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}