/**
 * Collection path: /annualSales/{uuid}
 */
export type AnnualSale = {
    uuid: string
    sale: number
    year: number
    companyRef: string // Company['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
