import { SupportedSocialMediaPlatforms } from "@/core/enums/supported_social_media_platforms.enum";
import { Model } from "@/core/interfaces/model.interface";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { UserSocialMedia } from "@/types/firebase/user/user_social_media";
import Utilities from "@/lib/utils";

export default class UserSocialMediaModel implements Model {
    // * FIELDS
    private _uuid: string;
    private _profileURL: string;
    private _userRef: string;
    private _platform: SupportedSocialMediaPlatforms;
    private _username: string;
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
        profileURL,
        userRef,
        platform,
        username,
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
        profileURL: string,
        userRef: string,
        platform: SupportedSocialMediaPlatforms,
        username: string,
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
        this._profileURL = profileURL;
        this._userRef = userRef;
        this._platform = platform;
        this._username = username;
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
    get profileURL(): string { return this._profileURL; }
    get userRef(): string { return this._userRef; }
    get platform(): SupportedSocialMediaPlatforms { return this._platform; }
    get username(): string { return this._username; }
    get isVerified(): boolean { return this._isVerified; }
    get isPublic(): boolean { return this._isPublic; }
    get addedAt(): Date { return this._addedAt; }
    get addedByRef(): string { return this._addedByRef; }
    get updatedAt(): Date { return this._updatedAt; }
    get updatedByRef(): string { return this._updatedByRef; }
    get deletedAt(): Date | null { return this._deletedAt; }
    get deletedByRef(): string | null { return this._deletedByRef; }

    // * UTILITIES
    public copyWith<UserSocialMediaModel>({
        uuid,
        profileURL,
        userRef,
        platform,
        username,
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
        profileURL?: string,
        userRef?: string,
        platform?: SupportedSocialMediaPlatforms,
        username?: string,
        isVerified?: boolean,
        isPublic?: boolean,
        addedAt?: Date,
        addedByRef?: string,
        updatedAt?: Date,
        updatedByRef?: string,
        deletedAt?: Date | null,
        deletedByRef?: string | null
    }): UserSocialMediaModel {
        return new UserSocialMediaModel({
            uuid: uuid ?? this.uuid,
            profileURL: profileURL ?? this.profileURL,
            userRef: userRef ?? this.userRef,
            platform: platform ?? this.platform,
            username: username ?? this.username,
            isVerified: isVerified ?? this.isVerified,
            isPublic: isPublic ?? this.isPublic,
            addedAt: addedAt ?? this.addedAt,
            addedByRef: addedByRef ?? this.addedByRef,
            updatedAt: updatedAt ?? this.updatedAt,
            updatedByRef: updatedByRef ?? this.updatedByRef,
            deletedAt: deletedAt ?? this.deletedAt,
            deletedByRef: deletedByRef ?? this.deletedByRef
        }) as UserSocialMediaModel;
    }

    public fromFirestore<UserSocialMediaModel>({ snapshot, options }: {
        snapshot: DocumentSnapshot, options?: SnapshotOptions
    }): UserSocialMediaModel {
        const data = snapshot.data(options) as UserSocialMedia;

        return new UserSocialMediaModel({
            uuid: data.uuid,
            profileURL: data.profileURL,
            userRef: data.userRef,
            platform: Utilities.stringToSupportedMediaPlatforms(data.platform),
            username: data.username,
            isVerified: data.isVerified,
            isPublic: data.isPublic,
            addedAt: data.addedAt,
            addedByRef: data.addedByRef,
            updatedAt: data.updatedAt,
            updatedByRef: data.updatedByRef,
            deletedAt: data.deletedAt,
            deletedByRef: data.deletedByRef
        }) as UserSocialMediaModel;
    }

    public toFirestore(): UserSocialMedia {
        return {
            uuid: this.uuid,
            profileURL: this.profileURL,
            userRef: this.userRef,
            platform: this.platform,
            username: this.username,
            isVerified: this.isVerified,
            isPublic: this.isPublic,
            addedAt: this.addedAt,
            addedByRef: this.addedByRef,
            updatedAt: this.updatedAt,
            updatedByRef: this.updatedByRef,
            deletedAt: this.deletedAt,
            deletedByRef: this.deletedByRef
        }
    }
}
