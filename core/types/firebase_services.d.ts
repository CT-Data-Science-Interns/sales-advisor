import { Analytics } from "firebase/analytics"
import { FirebaseApp } from "firebase/app"
import { Auth } from "firebase/auth"
import { Firestore } from "firebase/firestore"
import { FirebaseStorage } from "firebase/storage"

export type FirebaseServices = {
    app: FirebaseApp | null,
    analytics: Analytics | null,
    auth: Auth | null,
    db: Firestore | null,
    storage: FirebaseStorage | null
};
