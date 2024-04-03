import { Category } from "../../category"

export type CategoryMetadata = {
    uuid: Category['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}