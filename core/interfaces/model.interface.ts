import firebase from "firebase/compat/app";

export interface Model {
    // toJSON(): string;
    // fromJSON<T>(json: string): T;

    copyWith<T extends Model>(params: any): T;

    fromFirestore<T extends Model>({ snapshot, options }: {
        snapshot: firebase.firestore.DocumentSnapshot, options: any
    }): T;

    toFirestore(): { [key: string]: any };
}