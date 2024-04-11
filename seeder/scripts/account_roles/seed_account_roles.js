"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var fs_1 = require("fs");
var firestore_1 = require("firebase/firestore");
var app_1 = require("firebase/app");
console.log('Start of script.');
function generateAlphanumericUUID(length) {
    var uuid = (0, uuid_1.v4)().replace(/-/g, ''); // Generate UUID and remove dashes
    var alphanumericUUID = uuid.replace(/\W/g, ''); // Remove non-alphanumeric characters
    // If length is less than alphanumeric UUID length, return substring of required length
    if (length < alphanumericUUID.length) {
        return alphanumericUUID.substring(0, length);
    }
    // If length is greater than alphanumeric UUID length, pad with additional characters
    return alphanumericUUID.padEnd(length, '0');
}
// Generate 10 UUIDs.
var fileName = 'account_roles_uuids.txt';
var uuids = [];
// Check if the file exists
if ((0, fs_1.existsSync)(fileName)) {
    console.log("The ".concat(fileName, " file already exists. It will not be overwritten."));
    // Read data from the file synchronously
    try {
        var data = (0, fs_1.readFileSync)(fileName, 'utf-8');
        uuids = data.split('\n');
        console.log("Data read from ".concat(fileName, ":"), uuids);
    }
    catch (err) {
        var _err = err;
        console.error("Error reading from ".concat(fileName, ": ").concat(_err.message));
    }
}
else {
    // Generate 10 UUIDs.
    for (var i = 0; i < 10; i++) {
        uuids.push(generateAlphanumericUUID(20));
    }
    var data = uuids.join('\n');
    console.log(uuids);
    // Write data to the file synchronously.
    try {
        (0, fs_1.writeFileSync)(fileName, data);
        console.log("The ".concat(fileName, " file has been created with 10 UUIDs."));
    }
    catch (err) {
        var _err = err;
        console.error("Error writing to the ".concat(fileName, " file: ").concat(_err.message));
    }
}
var accountRoles = [
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
var app = (0, app_1.initializeApp)({
    apiKey: "AIzaSyD9cUZkrE78FPS9VON5ZK7Pum_KOlyBiE4",
    authDomain: "sales-advisor-pwa-dev.firebaseapp.com",
    projectId: "sales-advisor-pwa-dev",
    storageBucket: "sales-advisor-pwa-dev.appspot.com",
    messagingSenderId: "640264397292",
    appId: "1:640264397292:web:ae26a580cdca0af697a0c9",
    measurementId: "G-S2T3WLDMGQ"
});
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var db, collectionRef, i, accountRole, documentRef, err_1, _err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                db = (0, firestore_1.getFirestore)(app);
                collectionRef = (0, firestore_1.collection)(db, 'accountRoles');
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < accountRoles.length)) return [3 /*break*/, 6];
                accountRole = accountRoles[i];
                documentRef = (0, firestore_1.doc)(collectionRef, accountRole.uuid);
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, firestore_1.setDoc)(documentRef, accountRole)];
            case 3:
                _a.sent();
                console.log("AccountRole ".concat(accountRole.fullName, " has been seeded."));
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                _err = err_1;
                console.error("Error seeding accountRole ".concat(accountRole.fullName, ": ").concat(_err.message));
                return [3 /*break*/, 5];
            case 5:
                i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); };
main().then(function () {
    console.log('End of script.');
    process.exit(0);
}).catch(function (err) {
    var _err = err;
    console.error("Error in main function: ".concat(_err.message));
    process.exit(1);
});
