import firebaseConfig from "@/configs/firebase_config";
import { Analytics } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

const initializeFirebaseServices = (): {
    app: FirebaseApp | null,
    analytics: Analytics | null,
    auth: Auth | null,
    db: Firestore | null,
    storage: FirebaseStorage | null
} => {
    const app: FirebaseApp | null = initializeApp(firebaseConfig);
    // const analytics: Analytics | null = getAnalytics(app);
    const analytics: Analytics | null = null;
    const auth: Auth | null = getAuth(app);
    const db: Firestore | null = getFirestore(app);
    const storage: FirebaseStorage | null = getStorage(app, "gs://sales-advisor-pwa-dev.appspot.com");

    return {
        app,
        analytics,
        auth,
        db,
        storage
    }
}

// TODO: [p1] Refactor the initialization of the Firebase services.
// Temporary quick hack to expose the firebase services.
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app, "gs://sales-advisor-pwa-dev.appspot.com");

export default initializeFirebaseServices;
