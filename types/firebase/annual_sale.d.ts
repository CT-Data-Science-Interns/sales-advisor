import { Company } from "./company/company"
import { User } from "./user/user";

/**
 * Collection path: /annualSales/{uuid}
 */
export type AnnualSale = {
    uuid: string
    sale: number
    year: number
    companyRef: Company['uuid'],

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}