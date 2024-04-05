export default interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;

    // Optional since it might not be present in all configurations
    measurementId?: string;
}