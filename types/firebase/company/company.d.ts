import { BusinessModel } from "../business_model";
import { Category } from "../category";
import { CompanyContactNumber } from "../company_contact_number";
import { CompanyEmailAddress } from "../company_email_address";
import { CompanyFaxNumber } from "../company_fax_number";
import { CompanyWebsite } from "../company_website";
import { Subcategory } from "../subcategory";

/**
 * Collection path: /companies/{uuid}
 */
export type Company = {
    uuid: string;
    name: string;
    description: string;

    contactNumbers: CompanyContactNumber['uuid'][];
    faxNumbers: CompanyFaxNumber['uuid'][];
    websites: CompanyWebsite['uuid'][];
    emailAddresses: CompanyEmailAddress['uuid'][];

    businessModel: BusinessModel['uuid'][];
    category: Category['uuid'][];
    subcategory: Subcategory['uuid'][];

    employeesCount: {
        [year: string]: number;
    };
    annualSales: {
        [year: string]: number;
    };

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}