import { Category } from "../category"

export type CompanyCategory = {
    uuid: Category['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}