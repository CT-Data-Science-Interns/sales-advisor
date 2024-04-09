import firebaseConfig from "@/configs/firebase_config";
import { Analytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

// TODO: [p1] Refactor the initialization of the Firebase services.
// Temporary quick hack to expose the firebase services.
const app = initializeApp(firebaseConfig);

export default class FirebaseServicesInitialization {
    // * FIELDS
    static analytics: Analytics | null = null;
    static auth: Auth | null = getAuth(app);
    static db: Firestore | null = getFirestore(app);
    static storage: FirebaseStorage | null = getStorage(app, "gs://sales-advisor-pwa-dev.appspot.com");

    // eslint-disable-next-line no-useless-constructor
    private constructor() { }
}
