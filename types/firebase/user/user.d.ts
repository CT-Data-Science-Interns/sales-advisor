import { Sexes } from "@/constants/enums/sexes";
import { AccountRole } from "../account_role";

// Collection path: /users/{uuid}
export type User = {
    uuid: string;
    username: string;
    name: {
        firstName: string;
        lastName: string;
        middleName: string | null;
        suffix: string | null;
    };
    birthdate: Date;
    sex: Sexes;

    accountRolesRefs: AccountRole['uuid'][];

    // Metadata
    addedAt: Date;
    addedByRef: string;
    updatedAt: Date;
    updatedByRef: string;
    deletedAt: Date | null;
    deletedByRef: string | null;
}