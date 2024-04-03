import { CompanyContactNumber } from "../company_contact_number";

export type CompanyContactNumberMetadata = {
    uuid: CompanyContactNumber['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}