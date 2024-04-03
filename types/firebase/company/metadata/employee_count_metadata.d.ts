import { EmployeeCount } from "../../employee_count";

/**
 * Collection path: /companies/{company_uuid}/employeesCountsMetadata/{uuid}
 */
export type EmployeeCountMetadata = {
    uuid: EmployeeCount['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}