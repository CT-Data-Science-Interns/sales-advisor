import { EmployeeCount } from "../../employee_count";

export type EmployeeCountMetadata = {
    uuid: EmployeeCount['uuid'];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}