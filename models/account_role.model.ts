import { Model } from "@/constants/interfaces/model.interface";
import AccountRoleEntity from "@/entities/account_role_entity";
import firebase from "firebase/compat/app";

export default class AccountRoleModel extends AccountRoleEntity implements Model {
    fromFirestore<T>({ snapshot, options }: {
        snapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;
        options: any;
    }): T {
        throw new Error("Method not implemented.");
    }

    toFirestore<T1, T2>(data: T1): T2 {
        throw new Error("Method not implemented.");
    }

}