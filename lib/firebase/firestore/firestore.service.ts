import FirestoreException from "@/core/exceptions/firestore_exception";
import { Model } from "@/core/interfaces/model.interface";
import { Either } from "@/core/types/either";
import { FirebaseError } from "firebase/app";
import {
    addDoc,
    CollectionReference,
    doc,
    DocumentReference,
    Firestore,
    setDoc
} from "firebase/firestore";

/**
 * A Singleton class that provides Firestore services.
 */
export default class FirestoreService {
    // * FIELDS
    // eslint-disable-next-line no-use-before-define
    private static instance: FirestoreService | null = null;
    private _dbProvider: Firestore;

    // * CONSTRUCTOR
    private constructor({ dbProvider }: { dbProvider: Firestore }) {
        this._dbProvider = dbProvider;
    }

    static getInstance({ dbProvider }: { dbProvider: Firestore }): FirestoreService {
        if (!FirestoreService.instance) {
            FirestoreService.instance = new FirestoreService({ dbProvider });
        }

        return FirestoreService.instance;
    }

    // * UTILITIES
    // public async getServerTimestamp(): Promise<Date> {
    //     const timestamp = serverTimestamp();
    //     return timestamp as Date;
    // }

    public async addDocument<T extends Model>({ collectionRef, data }: {
        collectionRef: CollectionReference, data: T
    }): Promise<Either<FirestoreException, DocumentReference>> {
        try {
            const docRef: DocumentReference = await addDoc(collectionRef, data);
            return { right: docRef };
        } catch (error: any) {
            const _error = error as FirebaseError;
            const firestoreException = new FirestoreException({
                code: _error.code,
                message: _error.message,
                stackTrace: _error.stack || null
            });

            return { left: firestoreException };
        }

    }

    public async setDocument<T extends Model>({ ref, data }: {
        ref: DocumentReference | CollectionReference, data: T
    }): Promise<Either<FirestoreException, null>> {
        try {
            if (ref instanceof CollectionReference) {
                await setDoc(doc(ref), data); // Auto generated doc id.
            } else {
                await setDoc(ref, data); // Defined doc id.
            }

            return { right: null };
        } catch (error: any) {
            const _error = error as FirebaseError;
            const firestoreException = new FirestoreException({
                code: _error.code,
                message: _error.message,
                stackTrace: _error.stack || null
            });

            return { left: firestoreException };
        }


    }
}