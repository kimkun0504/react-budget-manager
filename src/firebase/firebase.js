import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAt44LqQthYZt73xTb63RBlHSjxrIa3rLk",
    authDomain: "trck-expense.firebaseapp.com",
    databaseURL: "https://trck-expense.firebaseio.com",
    projectId: "trck-expense",
    storageBucket: "trck-expense.appspot.com",
    messagingSenderId: "375423098716"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref().set({
//     name: 'Kun Kim',
// });

export {firebase, googleAuthProvider, database as default};