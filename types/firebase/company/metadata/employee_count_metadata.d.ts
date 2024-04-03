import { EmployeeCount } from "../../employee_count";
import { User } from "./user/user";

/**
 * Collection path: /companies/{company_uuid}/employeesCountsMetadata/{uuid}
 */
export type EmployeeCountMetadata = {
    uuid: EmployeeCount['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}