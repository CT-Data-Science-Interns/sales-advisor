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
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var fs_1 = require("fs");
var uuid_1 = require("uuid");
var auth_1 = require("firebase/auth");
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
var filePath = '../../raw_data/sales_leaders_v2.csv';
// Read the sales_leaders_v2.csv file
var data = '';
try {
    data = (0, fs_1.readFileSync)(filePath, 'utf-8');
    console.log("Data read from ".concat(filePath, ":"), data);
}
catch (err) {
    var _err = err;
    console.log("Error reading from ".concat(filePath, ": ").concat(_err.message));
}
// Separate the data per line.
var lines = data.split('\n');
// Separate the data per column.
var columns = lines.map(function (line) { return line.split(','); });
// Remove the header row and the last row.
columns.shift();
columns.pop();
// Make an array of objects.
var salesLeaders = columns.map(function (column) {
    // Parse the country column to a list 
    // (i.e., it is possible to have multiple countries separated by a semicolon).
    var countries = column[5].split(';');
    return {
        firstName: column[0],
        lastName: column[1],
        email: column[2],
        username: column[3],
        password: column[4],
        country: countries,
    };
});
// console.log('Sales Leaders:', salesLeaders);
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
var auth = (0, auth_1.getAuth)(app);
var db = (0, firestore_1.getFirestore)(app);
var createUser = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var userCredential, err_1, _err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, auth_1.createUserWithEmailAndPassword)(auth, email, password)];
            case 1:
                userCredential = _a.sent();
                return [2 /*return*/, userCredential.user.uid];
            case 2:
                err_1 = _a.sent();
                _err = err_1;
                console.log("Error creating user ".concat(email, ": ").concat(_err.message));
                return [2 /*return*/, null];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };
var signInUser = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var userCredential, err_2, _err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, auth_1.signInWithEmailAndPassword)(auth, email, password)];
            case 1:
                userCredential = _a.sent();
                return [2 /*return*/, userCredential.user.uid];
            case 2:
                err_2 = _a.sent();
                _err = err_2;
                console.log("Error signing in user ".concat(email, ": ").concat(_err.message));
                return [2 /*return*/, null];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };
var signOutUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var err_3, _err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, auth.signOut()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                _err = err_3;
                console.log("Error signing out user: ".concat(_err.message));
                return [3 /*break*/, 3];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };
var addUserEmailAddress = function (userUUID, email) { return __awaiter(void 0, void 0, void 0, function () {
    var userEmailAddressRef, userEmailAddress, err_4, _err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userEmailAddressRef = (0, firestore_1.doc)(db, 'usersEmailAddresses', generateAlphanumericUUID(20));
                userEmailAddress = {
                    uuid: userEmailAddressRef.id,
                    email: email,
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
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, firestore_1.setDoc)(userEmailAddressRef, userEmailAddress)];
            case 2:
                _a.sent();
                console.log("UserEmailAddress ".concat(userEmailAddress.email, " has been seeded."));
                return [2 /*return*/, userEmailAddress.uuid];
            case 3:
                err_4 = _a.sent();
                _err = err_4;
                console.log("Error seeding userEmailAddress ".concat(userEmailAddress.email, ": ").concat(_err.message));
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addUserObject = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var userRef, err_5, _err;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userRef = (0, firestore_1.doc)(db, 'users', user.uuid);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, firestore_1.setDoc)(userRef, user)];
            case 2:
                _a.sent();
                console.log("User Object ".concat(user.username, " has been seeded."));
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                _err = err_5;
                console.log("Error seeding user ".concat(user.username, ": ").concat(_err.message));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var SALES_LEADER_UUID = 'e62750e9626b49c2bb80';
// Create users in Firebase Auth.
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, userUUID, q, querySnapshot, userEmailAddressUUID, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < salesLeaders.length)) return [3 /*break*/, 12];
                console.log("Processing #".concat(i + 1, " ").concat(salesLeaders[i].email, "..."));
                console.log('Signing in user...');
                userUUID = void 0;
                return [4 /*yield*/, signInUser(salesLeaders[i].email, salesLeaders[i].password)];
            case 2:
                // Check if user exists. If not, create user.
                userUUID = _a.sent();
                if (!(userUUID === null)) return [3 /*break*/, 4];
                console.log('User does not exist. Creating user...');
                return [4 /*yield*/, createUser(salesLeaders[i].email, salesLeaders[i].password)];
            case 3:
                userUUID = _a.sent();
                if (userUUID === null) {
                    console.log('User creation failed for', salesLeaders[i].email);
                    return [2 /*return*/];
                }
                _a.label = 4;
            case 4:
                console.log('User signed in.');
                console.log('Adding user email address to Firestore (usersEmailAddresses collection)...');
                q = (0, firestore_1.query)((0, firestore_1.collection)(db, 'usersEmailAddresses'), (0, firestore_1.where)('email', '==', salesLeaders[i].email));
                return [4 /*yield*/, (0, firestore_1.getDocs)(q)];
            case 5:
                querySnapshot = _a.sent();
                if (!querySnapshot.empty) return [3 /*break*/, 7];
                return [4 /*yield*/, addUserEmailAddress(userUUID, salesLeaders[i].email)];
            case 6:
                userEmailAddressUUID = _a.sent();
                if (userEmailAddressUUID === null) {
                    console.log('UserEmailAddress creation failed for', salesLeaders[i].email);
                    return [2 /*return*/];
                }
                console.log('User email address added to Firestore.');
                return [3 /*break*/, 8];
            case 7:
                console.log('User email address already exists in Firestore.');
                _a.label = 8;
            case 8:
                console.log('Building user object...');
                user = {
                    uuid: userUUID,
                    username: salesLeaders[i].username,
                    name: {
                        firstName: salesLeaders[i].firstName,
                        lastName: salesLeaders[i].lastName,
                        middleName: null,
                        suffix: null,
                    },
                    birthdate: null,
                    sex: null,
                    accountRolesRefs: [SALES_LEADER_UUID], // Sales Leader
                    emailAddressesRefs: [salesLeaders[i].email],
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
                return [4 /*yield*/, addUserObject(user)];
            case 9:
                // Add user to Firestore.
                _a.sent();
                console.log('User object added to Firestore.');
                console.log('Signing out user...');
                // Sign out user.
                return [4 /*yield*/, signOutUser()];
            case 10:
                // Sign out user.
                _a.sent();
                console.log('User signed out.\n');
                if (i === salesLeaders.length - 1) {
                    console.log('All users have been seeded.');
                }
                _a.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 1];
            case 12: return [2 /*return*/];
        }
    });
}); };
main().then(function () {
    console.log('Main function executed.');
}).catch(function (err) {
    var _err = err;
    console.log("Error in main function: ".concat(_err.message));
});
