import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyAN9JL8wfBv-rHJk1QkEsoSjj3ALAkeRU8",
        authDomain: "todos-bc9f3.firebaseapp.com",
        projectId: "todos-bc9f3",
        storageBucket: "todos-bc9f3.appspot.com",
        messagingSenderId: "107756196532",
        appId: "1:107756196532:web:6dde2645ecbdf118cfbde1",
        measurementId: "G-Z53S0PYTCR"
});

const db = firebaseApp.firestore();

export default db;