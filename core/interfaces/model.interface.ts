import firebase from "firebase/compat/app";

export interface Model {
    // toJSON(): string;
    // fromJSON(json: string): void;\

    fromFirestore<T>({ snapshot, options }: {
        snapshot: firebase.firestore.DocumentSnapshot, options: any
    }): T;

    toFirestore<T1, T2>(data: T1): T2;
}