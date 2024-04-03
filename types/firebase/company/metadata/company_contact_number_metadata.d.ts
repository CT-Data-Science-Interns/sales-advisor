import { CompanyContactNumber } from "../company_contact_number";

/**
 * Collection path: /companies/{company_uuid}/companyContactNumbersMetadata/{uuid}
 */
export type CompanyContactNumberMetadata = {
    uuid: CompanyContactNumber['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}