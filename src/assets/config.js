import firebase, { database } from 'firebase'

  const config = {
    apiKey: "", // API KEY Slack for request
    authDomain: "kanbandiw.firebaseapp.com",
    databaseURL: "https://kanbandiw.firebaseio.com",
    projectId: "kanbandiw",
    storageBucket: "kanbandiw.appspot.com",
    messagingSenderId: "564646140085"
  };

  firebase.initializeApp(config);
  const db = firebase.database()

  export default db