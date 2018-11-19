import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCeMMW67EXafIoYxPv3q6Guk5AR4A2lzWY",
  authDomain: "kanban-keren.firebaseapp.com",
  databaseURL: "https://kanban-keren.firebaseio.com",
  projectId: "kanban-keren",
  storageBucket: "kanban-keren.appspot.com",
  messagingSenderId: "1006840181592"
}
let database = firebase.initializeApp(config).database()

export default database