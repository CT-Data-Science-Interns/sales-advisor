/**
 * Collection path: /companies/{company_uuid}/annualSalesMetadata/{uuid}
 */
export type AnnualSaleMetadata = {
    uuid: string; // AnnualSale['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
