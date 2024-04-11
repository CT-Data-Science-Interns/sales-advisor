import { v4 as uuidv4 } from 'uuid';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import type { AccountRole } from '../../../types/firebase/account_role';
import { collection, doc, Firestore, getFirestore, setDoc } from 'firebase/firestore';
import { FirebaseApp, initializeApp } from 'firebase/app';

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


// Generate 10 UUIDs.
const fileName = 'account_roles_uuids.txt';
let uuids: string[] = [];

// Check if the file exists
if (existsSync(fileName)) {
    console.log(`The ${fileName} file already exists. It will not be overwritten.`);

    // Read data from the file synchronously
    try {
        const data = readFileSync(fileName, 'utf-8');
        uuids = data.split('\n');
        console.log(`Data read from ${fileName}:`, uuids);
    } catch (err: any) {
        const _err: Error = err;
        console.error(`Error reading from ${fileName}: ${_err.message}`);
    }
} else {
    // Generate 10 UUIDs.
    for (let i = 0; i < 10; i++) {
        uuids.push(generateAlphanumericUUID(20));
    }
    const data = uuids.join('\n');

    console.log(uuids);

    // Write data to the file synchronously.
    try {
        writeFileSync(fileName, data);
        console.log(`The ${fileName} file has been created with 10 UUIDs.`);
    } catch (err: any) {
        const _err: Error = err;
        console.error(`Error writing to the ${fileName} file: ${_err.message}`);
    }
}

const accountRoles: AccountRole[] = [
    {
        uuid: uuids[0],
        fullName: 'Administrator',
        shortName: 'admin',
        weight: 100,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
    {
        uuid: uuids[1],
        fullName: 'User',
        shortName: 'user',
        weight: 50,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
    {
        uuid: uuids[2],
        fullName: 'Guest',
        shortName: 'guest',
        weight: 0,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
    {
        uuid: uuids[3],
        fullName: 'Salesperson',
        shortName: 'salesperson',
        weight: 75,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
    {
        uuid: uuids[4],
        fullName: 'Sales Leader',
        shortName: 'sales_leader',
        weight: 80,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
    {
        uuid: uuids[5],
        fullName: 'Developer',
        shortName: 'developer',
        weight: 95,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
    {
        uuid: uuids[6],
        fullName: 'Banned',
        shortName: 'banned',
        weight: -100,

        // Metadata
        addedAt: new Date(),
        addedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        updatedAt: new Date(),
        updatedByRef: 'XvtljP3a6iXTiEJ3QawfQ6ou1pm1',
        deletedAt: null,
        deletedByRef: null
    },
];

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


const main = async () => {
    const db: Firestore = getFirestore(app)
    const collectionRef = collection(db, 'accountRoles');

    // Seed data to Firestore.
    for (let i = 0; i < accountRoles.length; i++) {
        const accountRole = accountRoles[i];
        const documentRef = doc(collectionRef, accountRole.uuid);

        try {
            await setDoc(documentRef, accountRole);
            console.log(`AccountRole ${accountRole.fullName} has been seeded.`);
        } catch (err: any) {
            const _err: Error = err;
            console.error(`Error seeding accountRole ${accountRole.fullName}: ${_err.message}`);
        }
    }
};

main().then(() => {
    console.log('End of script.');
    process.exit(0);
}).catch((err: any) => {
    const _err: Error = err;
    console.error(`Error in main function: ${_err.message}`);
    process.exit(1);
});
