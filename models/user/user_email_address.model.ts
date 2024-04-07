import { Model } from "@/core/interfaces/model.interface";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { UserEmailAddress } from "@/types/firebase/user/user_email_address";

export default class UserEmailAddressModel implements Model {
    // * FIELDS
    private _uuid: string;
    private _email: string;
    private _userRef: string;
    private _isPrimary: boolean;
    private _isVerified: boolean;
    private _isPublic: boolean;

    // METADATA FIELDS
    private _addedAt: Date;
    private _addedByRef: string;
    private _updatedAt: Date;
    private _updatedByRef: string;
    private _deletedAt: Date | null;
    private _deletedByRef: string | null;

    // * CONSTRUCTOR
    constructor({
        uuid,
        email,
        userRef,
        isPrimary = true,
        isVerified = false,
        isPublic = true,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt = null,
        deletedByRef = null
    }: {
        uuid: string,
        email: string,
        userRef: string,
        isPrimary?: boolean,
        isVerified?: boolean,
        isPublic?: boolean,
        addedAt: Date,
        addedByRef: string,
        updatedAt: Date,
        updatedByRef: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }) {
        this._uuid = uuid;
        this._email = email;
        this._userRef = userRef;
        this._isPrimary = isPrimary;
        this._isVerified = isVerified;
        this._isPublic = isPublic;
        this._addedAt = addedAt;
        this._addedByRef = addedByRef;
        this._updatedAt = updatedAt;
        this._updatedByRef = updatedByRef;
        this._deletedAt = deletedAt;
        this._deletedByRef = deletedByRef;
    }

    // * GETTERS
    get uuid(): string { return this._uuid; }
    get email(): string { return this._email; }
    get userRef(): string { return this._userRef; }
    get isPrimary(): boolean { return this._isPrimary; }
    get isVerified(): boolean { return this._isVerified; }
    get isPublic(): boolean { return this._isPublic; }
    get addedAt(): Date { return this._addedAt; }
    get addedByRef(): string { return this._addedByRef; }
    get updatedAt(): Date { return this._updatedAt; }
    get updatedByRef(): string { return this._updatedByRef; }
    get deletedAt(): Date | null { return this._deletedAt; }
    get deletedByRef(): string | null { return this._deletedByRef; }

    // * UTILITIES
    public copyWith<UserEmailAddressModel>({
        uuid,
        email,
        userRef,
        isPrimary,
        isVerified,
        isPublic,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid?: string,
        email?: string,
        userRef?: string,
        isPrimary?: boolean,
        isVerified?: boolean,
        isPublic?: boolean,
        addedAt?: Date,
        addedByRef?: string,
        updatedAt?: Date,
        updatedByRef?: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }): UserEmailAddressModel {
        return new UserEmailAddressModel({
            uuid: uuid ?? this.uuid,
            email: email ?? this.email,
            userRef: userRef ?? this.userRef,
            isPrimary: isPrimary ?? this.isPrimary,
            isVerified: isVerified ?? this.isVerified,
            isPublic: isPublic ?? this.isPublic,
            addedAt: addedAt ?? this.addedAt,
            addedByRef: addedByRef ?? this.addedByRef,
            updatedAt: updatedAt ?? this.updatedAt,
            updatedByRef: updatedByRef ?? this.updatedByRef,
            deletedAt: deletedAt ?? this.deletedAt,
            deletedByRef: deletedByRef ?? this.deletedByRef
        }) as UserEmailAddressModel;
    }

    public fromFirestore<UserEmailAddressModel>({ snapshot, options }: {
        snapshot: DocumentSnapshot, options?: SnapshotOptions
    }): UserEmailAddressModel {
        const data = snapshot.data(options) as UserEmailAddress;

        return new UserEmailAddressModel({
            uuid: data.uuid,
            email: data.email,
            userRef: data.userRef,
            isPrimary: data.isPrimary,
            isVerified: data.isVerified,
            isPublic: data.isPublic,
            addedAt: data.addedAt,
            addedByRef: data.addedByRef,
            updatedAt: data.updatedAt,
            updatedByRef: data.updatedByRef,
            deletedAt: data.deletedAt,
            deletedByRef: data.deletedByRef
        }) as UserEmailAddressModel;
    }

    public toFirestore(): UserEmailAddress {
        return {
            uuid: this.uuid,
            email: this.email,
            userRef: this.userRef,
            isPrimary: this.isPrimary,
            isVerified: this.isVerified,
            isPublic: this.isPublic,
            addedAt: this.addedAt,
            addedByRef: this.addedByRef,
            updatedAt: this.updatedAt,
            updatedByRef: this.updatedByRef,
            deletedAt: this.deletedAt,
            deletedByRef: this.deletedByRef,
        };
    }
}
