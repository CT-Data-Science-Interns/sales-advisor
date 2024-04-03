import { AnnualSale } from "../../annual_sale";

export type AnnualSaleMetadata = {
    uuid: AnnualSale['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}