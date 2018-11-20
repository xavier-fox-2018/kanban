var config = {
    apiKey: "AIzaSyA9QrHet7qLSiMPEQg5AINNz-eF9DEMIC0",
    authDomain: "mykanban88.firebaseapp.com",
    databaseURL: "https://mykanban88.firebaseio.com",
    projectId: "mykanban88",
    storageBucket: "mykanban88.appspot.com",
    messagingSenderId: "40327313099"
  };
firebase.initializeApp(config);

const db = firebase.database()

export default db