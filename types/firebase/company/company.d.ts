import { BusinessModel } from "../business_model";
import { Category } from "../category";
import { CompanyContactNumber } from "./company_contact_number";
import { CompanyEmailAddress } from "./company_email_address";
import { CompanyFaxNumber } from "./company_fax_number";
import { CompanyWebsite } from "./company_website";
import { Subcategory } from "../subcategory";
import { EmployeeCount } from "../employee_count";
import { AnnualSale } from "../annual_sale";
import { CompanyAddress } from "./company_address";
import { User } from "./user/user";

/**
 * Collection path: /companies/{uuid}
 */
export type Company = {
    uuid: string;
    name: string;
    description: string;

    companyAddressesRefs: CompanyAddress['uuid'][];
    contactNumbersRefs: CompanyContactNumber['uuid'][];
    faxNumbersRefs: CompanyFaxNumber['uuid'][];
    websitesRefs: CompanyWebsite['uuid'][];
    emailAddressesRefs: CompanyEmailAddress['uuid'][];

    businessModelsRefs: BusinessModel['uuid'][];
    categoriesRefs: Category['uuid'][];
    subcategoriesRefs: Subcategory['uuid'][];

    employeesCountsRefs: EmployeeCount['uuid'][];
    annualSalesRefs: AnnualSale['uuid'][];

    // Metadata
    addedAt: Date;
    addedByRef: User['uuid'];
    updatedAt: Date;
    updatedByRef: User['uuid'];
    deletedAt: Date | null;
    deletedByRef: User['uuid'] | null;
}