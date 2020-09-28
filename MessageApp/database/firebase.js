// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-Vs3DyjU-bZY9ASzzgu7J4UHqBb2Jxqw",
    authDomain: "messageapp-af438.firebaseapp.com",
    databaseURL: "https://messageapp-af438.firebaseio.com",
    projectId: "messageapp-af438",
    storageBucket: "messageapp-af438.appspot.com",
    messagingSenderId: "842182645263",
    appId: "1:842182645263:web:5c866281e09a367b99357a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;