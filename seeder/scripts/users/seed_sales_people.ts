import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore, setDoc, doc, DocumentReference, where, collection, query, Query, getDocs } from "firebase/firestore";
import { User } from "../../../types/firebase/user/user";
import { readFileSync } from "fs";

import { v4 as uuidv4 } from 'uuid';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { UserEmailAddress } from "../../../types/firebase/user/user_email_address";

console.log('Start of script.');

function generateAlphanumericUUID(length: number): string {
    const uuid = uuidv4().replace(/-/g, ''); // Generate UUID and remove dashes
    const alphanumericUUID = uuid.replace(/\W/g, ''); // Remove non-alphanumeric characters

    // If length is less than alphanumeric UUID length, return substring of required length
    if (length < alphanumericUUID.length) {
        return alphanumericUUID.substring(0, length);
    }

    // If length is greater than alphanumeric UUID length, pad with additional characters
    return alphanumericUUID.padEnd(length, '0');
}

const filePath = '../../raw_data/sales_people_v2.csv';

// Read the csv file.
let data: string = '';
try {
    data = readFileSync(filePath, 'utf-8');
    console.log(`Data read from ${filePath}:`, data);
} catch (err: any) {
    const _err: Error = err;
    console.log(`Error reading from ${filePath}: ${_err.message}`);
}

// Separate the data per line.
const lines = data.split('\n');

// Separate the data per column.
const columns = lines.map(line => line.split(','));

// Remove the header row and the last row.
columns.shift();
columns.pop();

// Make an array of objects.
const salesPeople = columns.map(column => {
    // Parse the country column to a list 
    // (i.e., it is possible to have multiple countries separated by a semicolon).
    const countries = column[5].split(';');

    return {
        firstName: column[0],
        lastName: column[1],
        email: column[2],
        username: column[3],
        password: column[4],
        country: countries,
    };
});

// console.log('Sales Leaders:', salesPeople);

// Setup Firestore connection.
const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyD9cUZkrE78FPS9VON5ZK7Pum_KOlyBiE4",
    authDomain: "sales-advisor-pwa-dev.firebaseapp.com",
    projectId: "sales-advisor-pwa-dev",
    storageBucket: "sales-advisor-pwa-dev.appspot.com",
    messagingSenderId: "640264397292",
    appId: "1:640264397292:web:ae26a580cdca0af697a0c9",
    measurementId: "G-S2T3WLDMGQ"
})
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app)

const createUser = async (email: string, password: string): Promise<string | null> => {
    try {
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    } catch (err: any) {
        const _err: Error = err;
        console.log(`Error creating user ${email}: ${_err.message}`);
        return null;
    };
}

const signInUser = async (email: string, password: string): Promise<string | null> => {
    try {
        const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    } catch (err: any) {
        const _err: Error = err;
        console.log(`Error signing in user ${email}: ${_err.message}`);
        return null;
    };
}

const signOutUser = async (): Promise<void> => {
    try {
        await auth.signOut();
    } catch (err: any) {
        const _err: Error = err;
        console.log(`Error signing out user: ${_err.message}`);
    };
}

const addUserEmailAddress = async (userUUID: string, email: string): Promise<string | null> => {
    // Add user email address to Firestore.
    const userEmailAddressRef: DocumentReference = doc(db, 'usersEmailAddresses', generateAlphanumericUUID(20));
    const userEmailAddress: UserEmailAddress = {
        uuid: userEmailAddressRef.id,
        email,
        userRef: userUUID,
        isPrimary: true,
        isVerified: false,
        isPublic: true,
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    };

    try {
        await setDoc(userEmailAddressRef, userEmailAddress);
        console.log(`UserEmailAddress ${userEmailAddress.email} has been seeded.`);

        return userEmailAddress.uuid;
    } catch (err: any) {
        const _err: Error = err;
        console.log(`Error seeding userEmailAddress ${userEmailAddress.email}: ${_err.message}`);

        return null;
    }
}

const addUserObject = async (user: User): Promise<void> => {
    // Add user to Firestore.
    const userRef: DocumentReference = doc(db, 'users', user.uuid);
    try {
        await setDoc(userRef, user);
        console.log(`User Object ${user.username} has been seeded.`);
    } catch (err: any) {
        const _err: Error = err;
        console.log(`Error seeding user ${user.username}: ${_err.message}`);
    }

}

// const SALES_LEADER_UUID = 'e62750e9626b49c2bb80';
const SALES_PERSON_UUID = 'f83f0d9cb57849c78276';

// Create users in Firebase Auth.
const main = async () => {
    for (let i = 0; i < salesPeople.length; i++) {
        console.log(`Processing #${i + 1} ${salesPeople[i].email}...`);

        console.log('Signing in user...');

        let userUUID: string | null;

        // Check if user exists. If not, create user.
        userUUID = await signInUser(salesPeople[i].email, salesPeople[i].password);
        if (userUUID === null) {
            console.log('User does not exist. Creating user...');

            userUUID = await createUser(salesPeople[i].email, salesPeople[i].password);
            if (userUUID === null) {
                console.log('User creation failed for', salesPeople[i].email);
                return;
            }
        }

        console.log('User signed in.');
        console.log('Adding user email address to Firestore (usersEmailAddresses collection)...');

        // Check if the email address already exists in Firestore.
        const q: Query = query(collection(db, 'usersEmailAddresses'), where('email', '==', salesPeople[i].email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            // Add user email address to Firestore.
            const userEmailAddressUUID: string | null = await addUserEmailAddress(userUUID, salesPeople[i].email);
            if (userEmailAddressUUID === null) {
                console.log('UserEmailAddress creation failed for', salesPeople[i].email);
                return;
            }

            console.log('User email address added to Firestore.');
        } else {
            console.log('User email address already exists in Firestore.');
        }

        console.log('Building user object...');

        // Build user object.
        const user: User = {
            uuid: userUUID,
            username: salesPeople[i].username,
            name: {
                firstName: salesPeople[i].firstName,
                lastName: salesPeople[i].lastName,
                middleName: null,
                suffix: null,
            },
            birthdate: null,
            sex: null,
            accountRolesRefs: [SALES_PERSON_UUID], // Sales Person
            emailAddressesRefs: [salesPeople[i].email],
            contactNumbersRefs: null,
            socialMediasRefs: null,
            managedUsersRefs: null,
            managedByRefs: null,
            delegationsRefs: null,
            itinerariesRefs: null,
            addedAt: new Date(),
            addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
            updatedAt: new Date(),
            updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
            deletedAt: null,
            deletedByRef: null
        };

        console.log('User object built.');
        console.log('Adding user object to Firestore (Users collection)...');

        // Add user to Firestore.
        await addUserObject(user);

        console.log('User object added to Firestore.');
        console.log('Signing out user...');

        // Sign out user.
        await signOutUser();

        console.log('User signed out.\n');

        if (i === salesPeople.length - 1) {
            console.log('All users have been seeded.');
        }
    }
};


main().then(() => {
    console.log('Main function executed.');
}).catch((err: any) => {
    const _err: Error = err;
    console.log(`Error in main function: ${_err.message}`);
});
