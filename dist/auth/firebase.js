"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase/app");
const serviceAccount = require("./firebaseServiceAccount.json");
const firebaseParams = {
    apiKey: serviceAccount.apiKey,
    authDomain: serviceAccount.authDomain,
    databaseURL: serviceAccount.databaseURL,
    projectId: serviceAccount.projectId,
    storageBucket: serviceAccount.storageBucket,
    messagingSenderId: serviceAccount.messagingSenderId,
    appId: serviceAccount.appId,
    measurementId: serviceAccount.measurementId,
};
const firebaseConnection = firebase.initializeApp(firebaseParams);
exports.default = firebaseConnection;
//# sourceMappingURL=firebase.js.map