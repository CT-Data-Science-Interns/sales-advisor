/* eslint-disable no-use-before-define */
import { Model } from "@/core/interfaces/model.interface";
import AccountRoleModel from "../account_role.model";
import { Sexes } from "@/core/enums/sexes.enum";
import UserEmailAddressModel from "./user_email_address.model";
import UserContactNumberModel from "./user_contact_number.model";
import UserSocialMediaModel from "./user_social_media.model";
import { DocumentSnapshot, DocumentData, SnapshotOptions } from "firebase/firestore";

export default class UserModel implements Model {
    // * FIELDS
    private _uuid: string;
    private _username: string;
    private _name: {
        firstName: string;
        lastName: string;
        middleName: string | null;
        suffix: string | null;
    };

    private _birthdate: Date;
    private _sex: Sexes;
    private _accountRolesRefs: AccountRoleModel[] | string[];

    private _emailAddressesRefs: UserEmailAddressModel[] | string[];
    private _contactNumbersRefs: UserContactNumberModel[] | string[] | null;
    private _socialMediaRefs: UserSocialMediaModel[] | string[] | null;

    private _managedUsersRefs: UserModel[] | string[] | null;
    private _managedByRefs: UserModel[] | string[] | null;
    private _delegationsRefs: string[] | null; // TODO: [p1] Implement Delegation model.

    // METADATA FIELDS
    private _addedAt: Date;
    private _addedByRef: UserModel | string;
    private _updatedAt: Date;
    private _updatedByRef: UserModel | string;
    private _deletedAt: Date | null;
    private _deletedByRef: UserModel | string | null;

    // * CONSTRUCTOR
    constructor({
        uuid,
        username,
        name,
        birthdate,
        sex,
        accountRolesRefs,
        emailAddressesRefs,
        contactNumbersRefs = null,
        socialMediaRefs = null,
        managedUsersRefs = null,
        managedByRefs = null,
        delegationsRefs = null,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt = null,
        deletedByRef = null
    }: {
        uuid: string,
        username: string,
        name: {
            firstName: string,
            lastName: string,
            middleName: string | null,
            suffix: string | null
        },
        birthdate: Date,
        sex: Sexes,
        accountRolesRefs: AccountRoleModel[] | string[],
        emailAddressesRefs: UserEmailAddressModel[] | string[],
        contactNumbersRefs?: UserContactNumberModel[] | string[] | null,
        socialMediaRefs?: UserSocialMediaModel[] | string[] | null,
        managedUsersRefs?: UserModel[] | string[] | null,
        managedByRefs?: UserModel[] | string[] | null,
        delegationsRefs?: string[] | null,
        addedAt: Date,
        addedByRef: UserModel | string,
        updatedAt: Date,
        updatedByRef: UserModel | string,
        deletedAt?: Date | null,
        deletedByRef?: string | UserModel | null
    }) {
        this._uuid = uuid;
        this._username = username;
        this._name = name;
        this._birthdate = birthdate;
        this._sex = sex;
        this._accountRolesRefs = accountRolesRefs;
        this._emailAddressesRefs = emailAddressesRefs;
        this._contactNumbersRefs = contactNumbersRefs;
        this._socialMediaRefs = socialMediaRefs;
        this._managedUsersRefs = managedUsersRefs;
        this._managedByRefs = managedByRefs;
        this._delegationsRefs = delegationsRefs;
        this._addedAt = addedAt;
        this._addedByRef = addedByRef;
        this._updatedAt = updatedAt;
        this._updatedByRef = updatedByRef;
        this._deletedAt = deletedAt;
        this._deletedByRef = deletedByRef;
    }

    // * GETTERS
    get uuid(): string { return this._uuid; }
    get username(): string { return this._username; }
    get name(): {
        firstName: string;
        lastName: string;
        middleName: string | null;
        suffix: string | null;
    } { return this._name; }

    get birthdate(): Date { return this._birthdate; }
    get sex(): Sexes { return this._sex; }
    get accountRolesRefs(): AccountRoleModel[] | string[] { return this._accountRolesRefs; }
    get emailAddressesRefs(): UserEmailAddressModel[] | string[] { return this._emailAddressesRefs; }
    get contactNumbersRefs(): UserContactNumberModel[] | string[] | null { return this._contactNumbersRefs; }
    get socialMediaRefs(): UserSocialMediaModel[] | string[] | null { return this._socialMediaRefs; }
    get managedUsersRefs(): UserModel[] | string[] | null { return this._managedUsersRefs; }
    get managedByRefs(): UserModel[] | string[] | null { return this._managedByRefs; }
    get delegationsRefs(): string[] | null { return this._delegationsRefs; }
    get addedAt(): Date { return this._addedAt; }
    get addedByRef(): UserModel | string { return this._addedByRef; }
    get updatedAt(): Date { return this._updatedAt; }
    get updatedByRef(): UserModel | string { return this._updatedByRef; }
    get deletedAt(): Date | UserModel | null { return this._deletedAt; }
    get deletedByRef(): string | UserModel | null { return this._deletedByRef; }

    // * UTILITIES
    copyWith<T>(params: any): T {
        throw new Error("Method not implemented.");
    }

    fromFirestore<T>({ snapshot, options }: { snapshot: DocumentSnapshot<DocumentData, DocumentData>; options?: SnapshotOptions | undefined; }): T {
        throw new Error("Method not implemented.");
    }

    toFirestore<T>(): T | { [key: string]: any; } {
        throw new Error("Method not implemented.");
    }

}
