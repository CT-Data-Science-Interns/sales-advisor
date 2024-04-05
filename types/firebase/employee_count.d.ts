
import { User } from "./user/user";
/**
 * Collection path: /employeesCount/{uuid}
 */
export type EmployeeCount = {
    uuid: string;
    count: number;
    year: number;
    companyRef: string;

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}