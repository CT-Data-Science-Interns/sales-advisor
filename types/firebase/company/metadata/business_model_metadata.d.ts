import { BusinessModel } from "../../business_model"
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/businessModelsMetadata/{uuid}
 */
export type BusinessModelMetadata = {
    uuid: BusinessModel['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}