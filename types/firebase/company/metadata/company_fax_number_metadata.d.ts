import { CompanyFaxNumber } from "../company_fax_number";

/**
 * Collection path: /companies/{company_uuid}/companiesFaxNumbersMetadata/{uuid}
 */
export type CompanyFaxNumberMetadata = {
    uuid: CompanyFaxNumber['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}