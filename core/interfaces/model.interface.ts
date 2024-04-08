import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface Model {
    // toJSON(): string;
    // fromJSON<T>(json: string): T;

    copyWith<T>(params: any): T;

    fromFirestore<T>({ snapshot, options }: {
        snapshot: DocumentSnapshot, options?: SnapshotOptions
    }): T;

    toFirestore<T>(): T | { [key: string]: any };
}
