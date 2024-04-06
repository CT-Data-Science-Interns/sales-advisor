export interface Entity {
    copyWith<T extends Entity>(params: any): T;
}