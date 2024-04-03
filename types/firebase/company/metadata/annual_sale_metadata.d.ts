import { AnnualSale } from "../../annual_sale";

/**
 * Collection path: /companies/{company_uuid}/annualSalesMetadata/{uuid}
 */
export type AnnualSaleMetadata = {
    uuid: AnnualSale['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}