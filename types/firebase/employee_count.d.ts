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
    addedByRef: string; // User['uuid']
    updatedAt: Date;
    updatedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
