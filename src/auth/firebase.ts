import * as firebase from 'firebase/app';

import * as serviceAccount from './firebaseServiceAccount.json';

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

export default firebaseConnection;
