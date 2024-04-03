import { BusinessModel } from "../../business_model"

/**
 * Collection path: /companies/{company_uuid}/businessModelsMetadata/{uuid}
 */
export type BusinessModelMetadata = {
    uuid: BusinessModel['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}