import { AnnualSale } from "../../annual_sale";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/annualSalesMetadata/{uuid}
 */
export type AnnualSaleMetadata = {
    uuid: AnnualSale['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}