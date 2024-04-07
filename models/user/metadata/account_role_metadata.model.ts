import { Model } from "@/core/interfaces/model.interface";
import UserModel from "../user.model";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { AccountRoleMetadata } from "@/types/firebase/user/metadata/account_role_metadata";

export default class AccountRoleMetadataModel implements Model {
    // * FIELDS
    private _uuid: string;

    // METADATA FIELDS
    private _addedAt: Date;
    private _addedByRef: UserModel | string;
    private _deletedAt: Date | null;
    private _deletedByRef: UserModel | string | null;

    // * CONSTRUCTOR
    constructor({
        uuid,
        addedAt,
        addedByRef,
        deletedAt = null,
        deletedByRef = null
    }: {
        uuid: string,
        addedAt: Date,
        addedByRef: UserModel | string,
        deletedAt?: Date | null,
        deletedByRef?: UserModel | string | null
    }) {
        this._uuid = uuid;
        this._addedAt = addedAt;
        this._addedByRef = addedByRef;
        this._deletedAt = deletedAt;
        this._deletedByRef = deletedByRef;
    }

    // * GETTERS
    get uuid(): string { return this._uuid; }
    get addedAt(): Date { return this._addedAt; }
    get addedByRef(): UserModel | string { return this._addedByRef; }
    get deletedAt(): Date | null { return this._deletedAt; }
    get deletedByRef(): UserModel | string | null { return this._deletedByRef; }

    // * UTILITIES
    public copyWith<AccountRoleMetadataModel>({
        uuid,
        addedAt,
        addedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid?: string,
        addedAt?: Date,
        addedByRef?: UserModel | string,
        deletedAt?: Date | null,
        deletedByRef?: UserModel | string | null
    }): AccountRoleMetadataModel {
        return new AccountRoleMetadataModel({
            uuid: uuid || this.uuid,
            addedAt: addedAt || this.addedAt,
            addedByRef: addedByRef || this.addedByRef,
            deletedAt: deletedAt || this.deletedAt,
            deletedByRef: deletedByRef || this.deletedByRef
        }) as AccountRoleMetadataModel;
    }

    public fromFirestore<AccountRoleMetadataModel>({ snapshot, options }: {
        snapshot: DocumentSnapshot, options?: SnapshotOptions
    }): AccountRoleMetadataModel {
        const data = snapshot.data(options) as AccountRoleMetadata;

        return new AccountRoleMetadataModel({
            uuid: data.uuid,
            addedAt: data.addedAt,
            addedByRef: data.addedByRef,
            deletedAt: data.deletedAt,
            deletedByRef: data.deletedByRef
        }) as AccountRoleMetadataModel;
    }

    public toFirestore(): AccountRoleMetadata {
        return {
            uuid: this.uuid,
            addedAt: this.addedAt,
            addedByRef: this.addedByRef instanceof UserModel ? this.addedByRef.uuid : this.addedByRef,
            deletedAt: this.deletedAt,
            deletedByRef: this.deletedByRef instanceof UserModel ? this.deletedByRef.uuid : this.deletedByRef
        };
    }
}
