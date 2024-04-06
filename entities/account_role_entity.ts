import { Entity } from "../constants/interfaces/entity.interface";

export default class AccountRoleEntity implements Entity {
    constructor({
        uuid,
        fullName,
        shortName,
        weight,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid: string,
        fullName: string,
        shortName: string,
        weight: number,
        addedAt: Date,
        addedByRef: string,
        updatedAt: Date,
        updatedByRef: string,
        deletedAt: Date | null,
        deletedByRef: string | null
    }) {
        this.uuid = uuid;
        this.fullName = fullName;
        this.shortName = shortName;
        this.weight = weight;
        this.addedAt = addedAt;
        this.addedByRef = addedByRef;
        this.updatedAt = updatedAt;
        this.updatedByRef = updatedByRef;
        this.deletedAt = deletedAt;
        this.deletedByRef = deletedByRef;
    };

    // * PROPERTIES
    private uuid: string;
    private fullName: string;
    private shortName: string;
    private weight: number;

    // Metadata properties
    private addedAt: Date;
    private addedByRef: string;
    private updatedAt: Date;
    private updatedByRef: string;
    private deletedAt: Date | null;
    private deletedByRef: string | null;

    // * GETTERS
    get getUUID(): string { return this.uuid; }
    get getFullName(): string { return this.fullName; }
    get getShortName(): string { return this.shortName; }
    get getWeight(): number { return this.weight; }
    get getAddedAt(): Date { return this.addedAt; }
    get getAddedByRef(): string { return this.addedByRef; }
    get getUpdatedAt(): Date { return this.updatedAt; }
    get getUpdatedByRef(): string { return this.updatedByRef; }
    get getDeletedAt(): Date | null { return this.deletedAt; }
    get getDeletedByRef(): string | null { return this.deletedByRef; }

    // * UTILITIES
    public copyWith<AccountRoleEntity>({
        uuid,
        fullName,
        shortName,
        weight,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid?: string,
        fullName?: string,
        shortName?: string,
        weight?: number,
        addedAt?: Date,
        addedByRef?: string,
        updatedAt?: Date,
        updatedByRef?: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }): AccountRoleEntity {
        return new AccountRoleEntity({
            uuid: uuid ?? this.uuid,
            fullName: fullName ?? this.fullName,
            shortName: shortName ?? this.shortName,
            weight: weight ?? this.weight,
            addedAt: addedAt ?? this.addedAt,
            addedByRef: addedByRef ?? this.addedByRef,
            updatedAt: updatedAt ?? this.updatedAt,
            updatedByRef: updatedByRef ?? this.updatedByRef,
            deletedAt: deletedAt ?? this.deletedAt,
            deletedByRef: deletedByRef ?? this.deletedByRef
        }) as AccountRoleEntity;
    }
}
