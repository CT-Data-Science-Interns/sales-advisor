/* eslint-disable no-use-before-define */

import { Model } from "@/core/interfaces/model.interface";
import { Sexes } from "@/core/enums/sexes.enum";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { User } from "@/types/firebase/user/user";
import Utilities from "@/lib/utils";

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

    private _birthdate: Date | null;
    private _sex: Sexes | null;
    private _accountRolesRefs: string[];

    private _emailAddressesRefs: string[];
    private _contactNumbersRefs: string[] | null;
    private _socialMediasRefs: string[] | null;

    private _managedUsersRefs: string[] | null;
    private _managedByRefs: string[] | null;
    private _delegationsRefs: string[] | null;
    private _itinerariesRefs: string[] | null;

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
        username,
        name,
        birthdate = null,
        sex = null,
        accountRolesRefs,
        emailAddressesRefs,
        contactNumbersRefs = null,
        socialMediasRefs = null,
        managedUsersRefs = null,
        managedByRefs = null,
        delegationsRefs = null,
        itinerariesRefs = null,
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
            firstName: string;
            lastName: string;
            middleName: string | null;
            suffix: string | null;
        },
        birthdate?: Date | null,
        sex?: Sexes | null,
        accountRolesRefs: string[],
        emailAddressesRefs: string[],
        contactNumbersRefs?: string[] | null,
        socialMediasRefs?: string[] | null,
        managedUsersRefs?: string[] | null,
        managedByRefs?: string[] | null,
        delegationsRefs?: string[] | null,
        itinerariesRefs?: string[] | null,
        addedAt: Date,
        addedByRef: string,
        updatedAt: Date,
        updatedByRef: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }) {
        this._uuid = uuid;
        this._username = username;
        this._name = name;
        this._birthdate = birthdate;
        this._sex = sex;
        this._accountRolesRefs = accountRolesRefs;
        this._emailAddressesRefs = emailAddressesRefs;
        this._contactNumbersRefs = contactNumbersRefs;
        this._socialMediasRefs = socialMediasRefs;
        this._managedUsersRefs = managedUsersRefs;
        this._managedByRefs = managedByRefs;
        this._delegationsRefs = delegationsRefs;
        this._itinerariesRefs = itinerariesRefs;
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

    get birthdate(): Date | null { return this._birthdate; }
    get sex(): Sexes | null { return this._sex; }

    get accountRolesRefs(): string[] {
        return this._accountRolesRefs;
    }

    get emailAddressesRefs(): string[] {
        return this._emailAddressesRefs;
    }

    get contactNumbersRefs(): string[] | null {
        return this._contactNumbersRefs;
    }

    get socialMediasRefs(): string[] | null {
        return this._socialMediasRefs;
    }

    get managedUsersRefs(): string[] | null {
        return this._managedUsersRefs;
    }

    get managedByRefs(): string[] | null {
        return this._managedByRefs;
    }

    get delegationsRefs(): string[] | null {
        return this._delegationsRefs;
    }

    get itinerariesRefs(): string[] | null {
        return this._itinerariesRefs;
    }

    get addedAt(): Date { return this._addedAt; }
    get addedByRef(): string { return this._addedByRef; }
    get updatedAt(): Date { return this._updatedAt; }
    get updatedByRef(): string { return this._updatedByRef; }
    get deletedAt(): Date | null { return this._deletedAt; }
    get deletedByRef(): string | null { return this._deletedByRef; }

    // * UTILITIES
    public copyWith<UserModel>({
        uuid,
        username,
        name,
        birthdate,
        sex,
        accountRolesRefs,
        emailAddressesRefs,
        contactNumbersRefs,
        socialMediasRefs,
        managedUsersRefs,
        managedByRefs,
        delegationsRefs,
        itinerariesRefs,
        addedAt,
        addedByRef,
        updatedAt,
        updatedByRef,
        deletedAt,
        deletedByRef
    }: {
        uuid?: string,
        username?: string,
        name?: {
            firstName: string;
            lastName: string;
            middleName: string | null;
            suffix: string | null;
        },
        birthdate?: Date | null,
        sex?: Sexes | null,
        accountRolesRefs?: string[],
        emailAddressesRefs?: string[],
        contactNumbersRefs?: string[] | null,
        socialMediasRefs?: string[] | null,
        managedUsersRefs?: string[] | null,
        managedByRefs?: string[] | null,
        delegationsRefs?: string[] | null,
        itinerariesRefs?: string[] | null,
        addedAt?: Date,
        addedByRef?: string,
        updatedAt?: Date,
        updatedByRef?: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }): UserModel {
        return new UserModel({
            uuid: uuid ?? this.uuid,
            username: username ?? this.username,
            name: name ?? this.name,
            birthdate: birthdate ?? this.birthdate,
            sex: sex ?? this.sex,
            accountRolesRefs: accountRolesRefs ?? this.accountRolesRefs,
            emailAddressesRefs: emailAddressesRefs ?? this.emailAddressesRefs,
            contactNumbersRefs: contactNumbersRefs ?? this.contactNumbersRefs,
            socialMediasRefs: socialMediasRefs ?? this.socialMediasRefs,
            managedUsersRefs: managedUsersRefs ?? this.managedUsersRefs,
            managedByRefs: managedByRefs ?? this.managedByRefs,
            delegationsRefs: delegationsRefs ?? this.delegationsRefs,
            itinerariesRefs: itinerariesRefs ?? this.itinerariesRefs,
            addedAt: addedAt ?? this.addedAt,
            addedByRef: addedByRef ?? this.addedByRef,
            updatedAt: updatedAt ?? this.updatedAt,
            updatedByRef: updatedByRef ?? this.updatedByRef,
            deletedAt: deletedAt ?? this.deletedAt,
            deletedByRef: deletedByRef ?? this.deletedByRef
        }) as UserModel;
    }

    public fromFirestore<UserModel>({ snapshot, options }: {
        snapshot: DocumentSnapshot, options: SnapshotOptions
    }): UserModel {
        const data = snapshot.data(options) as User;

        return new UserModel({
            uuid: snapshot.id,
            username: data.username,
            name: data.name,
            birthdate: data.birthdate,
            sex: data.sex ? Utilities.stringToSexesEnum(data.sex) : null,
            accountRolesRefs: data.accountRolesRefs,
            emailAddressesRefs: data.emailAddressesRefs,
            contactNumbersRefs: data.contactNumbersRefs,
            socialMediasRefs: data.socialMediasRefs,
            managedUsersRefs: data.managedUsersRefs,
            managedByRefs: data.managedByRefs,
            delegationsRefs: data.delegationsRefs,
            itinerariesRefs: data.itinerariesRefs,
            addedAt: data.addedAt,
            addedByRef: data.addedByRef,
            updatedAt: data.updatedAt,
            updatedByRef: data.updatedByRef,
            deletedAt: data.deletedAt,
            deletedByRef: data.deletedByRef
        }) as UserModel;
    }

    public toFirestore(): User {
        return {
            uuid: this.uuid,
            username: this.username,
            name: this.name,
            birthdate: this.birthdate,
            sex: this.sex,
            accountRolesRefs: this.accountRolesRefs,
            emailAddressesRefs: this.emailAddressesRefs,
            contactNumbersRefs: this.contactNumbersRefs,
            socialMediasRefs: this.socialMediasRefs,
            managedUsersRefs: this.managedUsersRefs,
            managedByRefs: this.managedByRefs,
            delegationsRefs: this.delegationsRefs,
            itinerariesRefs: this.itinerariesRefs,
            addedAt: this.addedAt,
            addedByRef: this.addedByRef,
            updatedAt: this.updatedAt,
            updatedByRef: this.updatedByRef,
            deletedAt: this.deletedAt,
            deletedByRef: this.deletedByRef
        };
    }
}
