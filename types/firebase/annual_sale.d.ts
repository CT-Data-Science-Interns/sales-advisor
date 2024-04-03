import { Company } from "./company/company"

export type AnnualSale = {
    uuid: string
    sale: number
    year: number
    companyRef: Company['uuid'],

    // Metadata
    addedAt: Date
    addedByRef: string
    updatedAt: Date
    updatedByRef: string
    deletedAt: Date | null
    deletedByRef: string | null
}