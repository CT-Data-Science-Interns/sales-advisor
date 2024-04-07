/**
 * Collection path: /companies/{company_uuid}/employeesCountsMetadata/{uuid}
 */
export type EmployeeCountMetadata = {
    uuid: string; // EmployeeCount['uuid']

    // Metadata
    addedAt: Date;
    addedByRef: string; // User['uuid']
    deletedAt: Date | null;
    deletedByRef: string | null; // User['uuid'] | null
}
