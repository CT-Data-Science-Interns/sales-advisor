import { ContactNumberTypes } from "@/core/enums/contact_number_types.enum";
import { Sexes } from "@/core/enums/sexes.enum";
import { SupportedSocialMediaPlatforms } from "@/core/enums/supported_social_media_platforms.enum";

/**
 * A class that provides static utility methods.
 */
export default class Utilities {
    // * CONSTRUCTOR
    // eslint-disable-next-line no-useless-constructor
    private constructor() { }

    // * UTILITIES
    public static deepCopy<T>(obj: T, hash = new WeakMap()): T {
        // Handle non-objects and null
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        // If object has already been processed, return it
        if (hash.has(obj)) {
            return hash.get(obj);
        }

        // Handle dates
        if (obj instanceof Date) {
            return new Date(obj) as T;
        }

        // Handle arrays
        if (Array.isArray(obj)) {
            const newArray = obj.map((item) => this.deepCopy(item, hash));
            hash.set(obj, newArray);
            return newArray as any; // Type assertion since TypeScript can't infer the type of newArray
        }

        // Handle objects
        const newObj: any = {};
        hash.set(obj, newObj);

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[key] = this.deepCopy(obj[key], hash);
            }
        }

        return newObj;
    }

    public static stringToContactNumberTypesEnum(value: string): ContactNumberTypes {
        switch (value) {
            case 'Mobile':
                return ContactNumberTypes.Mobile;
            case 'Landline':
                return ContactNumberTypes.Landline;
            case 'Other':
                return ContactNumberTypes.Other;
            default:
                throw new Error(`Invalid value for the string to enum conversion: ${value}`);
        }
    }

    public static stringToSexesEnum(value: string): Sexes {
        switch (value) {
            case 'Female':
                return Sexes.Female;
            case 'Male':
                return Sexes.Male;
            case 'Other':
                return Sexes.Other;
            default:
                throw new Error(`Invalid value for the string to enum conversion: ${value}`);
        }
    }

    public static stringToSupportedMediaPlatforms(value: string): SupportedSocialMediaPlatforms {
        switch (value) {
            case 'Facebook':
                return SupportedSocialMediaPlatforms.Facebook;
            case 'Twitter':
                return SupportedSocialMediaPlatforms.Twitter;
            case 'Instagram':
                return SupportedSocialMediaPlatforms.Instagram;
            case 'LinkedIn':
                return SupportedSocialMediaPlatforms.LinkedIn;
            case 'WhatsApp':
                return SupportedSocialMediaPlatforms.WhatsApp;
            case 'Viber':
                return SupportedSocialMediaPlatforms.Viber;
            case 'Zoom':
                return SupportedSocialMediaPlatforms.Zoom;
            case 'Discord':
                return SupportedSocialMediaPlatforms.Discord;
            case 'Slack':
                return SupportedSocialMediaPlatforms.Slack;
            case 'GitHub':
                return SupportedSocialMediaPlatforms.GitHub;
            default:
                throw new Error(`Invalid value for the string to enum conversion: ${value}`);
        }
    }
}
