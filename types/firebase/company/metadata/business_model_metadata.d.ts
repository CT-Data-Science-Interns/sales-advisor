import { BusinessModel } from "../../business_model"

export type BusinessModelMetadata = {
    uuid: BusinessModel['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}