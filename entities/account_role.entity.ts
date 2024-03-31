import { Entity } from "../constants/interfaces/entity.interface";

// TODO: [P3] Add documentation to AccountRole entity type.
// TODO: [P3] Simplify the AccountRole entity type.
export class AccountRole implements Entity {
    constructor({
        uuid,
        name,
        weight,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid: string,
        name: string,
        weight: number,
        addedAt: Date,
        addedByRef: string,
        updatedAt: Date,
        updatedByRef: string,
        deletedAt: Date | null,
        deletedByRef: string | null
    }) {
        this.uuid = uuid;
        this.name = name;
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
    private name: string;
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
    get getName(): string { return this.name; }
    get getWeight(): number { return this.weight; }
    get getAddedAt(): Date { return this.addedAt; }
    get getAddedByRef(): string { return this.addedByRef; }
    get getUpdatedAt(): Date { return this.updatedAt; }
    get getUpdatedByRef(): string { return this.updatedByRef; }
    get getDeletedAt(): Date | null { return this.deletedAt; }
    get getDeletedByRef(): string | null { return this.deletedByRef; }

    // * UTILITIES
    public copyWith({
        uuid,
        name,
        weight,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid?: string,
        name?: string,
        weight?: number,
        addedAt?: Date,
        addedByRef?: string,
        updatedAt?: Date,
        updatedByRef?: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }): AccountRole {
        return new AccountRole({
            uuid: uuid ?? this.uuid,
            name: name ?? this.name,
            weight: weight ?? this.weight,
            addedAt: addedAt ?? this.addedAt,
            addedByRef: addedByRef ?? this.addedByRef,
            updatedAt: updatedAt ?? this.updatedAt,
            updatedByRef: updatedByRef ?? this.updatedByRef,
            deletedAt: deletedAt ?? this.deletedAt,
            deletedByRef: deletedByRef ?? this.deletedByRef
        });
    }
}
