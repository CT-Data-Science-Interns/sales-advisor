import { CompanyFaxNumber } from "../company_fax_number";

export type CompanyFaxNumberMetadata = {
    uuid: CompanyFaxNumber['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}