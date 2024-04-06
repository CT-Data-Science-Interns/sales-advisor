import FirestoreException from "@/core/exceptions/firestore_exception";
import { Model } from "@/core/interfaces/model.interface";
import { Either, fold } from "@/core/types/either";
import { FirebaseError } from "firebase/app";
import {
    addDoc,
    AggregateField,
    AggregateQuerySnapshot,
    CollectionReference,
    doc,
    DocumentReference,
    DocumentSnapshot,
    Firestore,
    getAggregateFromServer,
    getCountFromServer,
    getDoc,
    getDocFromCache,
    getDocs,
    Query,
    QuerySnapshot,
    serverTimestamp,
    setDoc,
    updateDoc
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
    public async getServerTimestamp(): Promise<Either<FirestoreException, Date>> {
        try {
            const docRef: Either<FirestoreException, DocumentReference | null>
                = await this.setDocument({
                    ref: doc(this._dbProvider, 'system', 'timestamp'),
                    data: { timestamp: serverTimestamp() }
                });
            fold(
                docRef,
                (left: FirestoreException) => {
                    throw new FirestoreException({
                        code: left.code,
                        message: left.message,
                        stackTrace: left.stackTrace
                    });
                },
                (right: DocumentReference | null) => {
                    // Do nothing.
                }
            );

            const snapshot: Either<FirestoreException, DocumentSnapshot>
                = await this.getDocument(doc(this._dbProvider, 'system', 'timestamp'));
            return fold(
                snapshot,
                (left: FirestoreException) => {
                    throw new FirestoreException({
                        code: left.code,
                        message: left.message,
                        stackTrace: left.stackTrace
                    });
                },
                (right: DocumentSnapshot) => {
                    return { right: right.get('timestamp').toDate() };
                }
            );
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

    public async addDocument<T extends Model>({ collectionRef, data }: {
        collectionRef: CollectionReference, data: T | { [key: string]: any }
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

    /**
     * NOTE: For documents containing maps, note that specifying a set with a 
     * field containing an empty map will overwrite the target document's map field.
     * 
     * Ref: https://firebase.google.com/docs/firestore/manage-data/add-data
     */
    public async setDocument<T extends Model>({ ref, data, isMerge = true }: {
        ref: DocumentReference | CollectionReference,
        data: T | { [key: string]: any },
        isMerge?: boolean
    }): Promise<Either<FirestoreException, DocumentReference | null>> {
        try {
            await setDoc(
                ref instanceof CollectionReference ? doc(ref) : ref,
                data,
                { merge: isMerge }
            );

            return { right: ref instanceof DocumentReference ? ref : null };
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

    public async updateDocument({ ref, data }: {
        ref: DocumentReference, data: { [key: string]: any }
    }): Promise<Either<FirestoreException, null>> {
        try {
            await updateDoc(ref, data);
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

    public async getDocument(docRef: DocumentReference)
        : Promise<Either<FirestoreException, DocumentSnapshot>> {
        try {
            const docSnapshot: DocumentSnapshot = await getDoc(docRef);
            return { right: docSnapshot };
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

    public async getDocumentFromCache(docRef: DocumentReference)
        : Promise<Either<FirestoreException, DocumentSnapshot>> {
        try {
            const docSnapshot: DocumentSnapshot = await getDocFromCache(docRef);
            return { right: docSnapshot };
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

    public async getDocuments(query: Query)
        : Promise<Either<FirestoreException, QuerySnapshot>> {
        try {
            const querySnapshot: QuerySnapshot = await getDocs(query);
            return { right: querySnapshot };
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

    /**
     * Get the count of documents from the Firestore server.
     * 
     * @example
     * ```typescript
     * const coll = collection(db, "cities");
     * const q = query(coll, where("state", "==", "CA"));
     * const snapshot = await getCountFromServer(q);
     * console.log('count: ', snapshot.data().count);
     * ```
     * 
     * Ref: https://firebase.google.com/docs/firestore/query-data/aggregation-queries
     */
    public async getCountFromServer(query: Query)
        : Promise<Either<FirestoreException, AggregateQuerySnapshot<{
            count: AggregateField<number>
        }>>> {
        try {
            const aggregateQuerySnapshot: AggregateQuerySnapshot<{ count: AggregateField<number> }>
                = await getCountFromServer(query);

            return { right: aggregateQuerySnapshot };
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

    /**
     * Get the aggregates from the Firestore server.
     * 
     * @example
     * ```typescript
     * const coll = collection(firestore, 'cities');
     * const q = query(coll, where('capital', '==', true));
     * const snapshot = await getAggregateFromServer(q, {
     * totalPopulation: sum('population')
     * });
     *
     * console.log('totalPopulation: ', snapshot.data().totalPopulation); 
     * ```
     * 
     * @example
     * ```typescript
     * const coll = collection(firestore, 'cities');
     * const snapshot = await getAggregateFromServer(coll, {
     * countOfDocs: count(),
     * totalPopulation: sum('population'),
     * averagePopulation: average('population')
     * });
     *
     * console.log('countOfDocs: ', snapshot.data().countOfDocs);
     * console.log('totalPopulation: ', snapshot.data().totalPopulation);
     * console.log('averagePopulation: ', snapshot.data().averagePopulation); 
     * ```
     * 
     * Ref: https://firebase.google.com/docs/firestore/query-data/aggregation-queries
     */
    public async getAggregatesFromServer({ query, aggregates }: {
        query: Query, aggregates: { [key: string]: AggregateField<any> }
    }): Promise<Either<FirestoreException, AggregateQuerySnapshot<{
        [key: string]: AggregateField<any>
    }>>> {
        try {
            const aggregateQuerySnapshot: AggregateQuerySnapshot<{
                [key: string]: AggregateField<any>
            }> = await getAggregateFromServer(query, aggregates);

            return { right: aggregateQuerySnapshot };
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

    // TODO: [p1] Implement utility methods that supports:
    // 1. Pagination, Cursors, and the like.
    // 2. Offline Persistence.
    // 3. Real-time updates.
}
