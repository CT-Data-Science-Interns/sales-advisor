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
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}