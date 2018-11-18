import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCiGpIDTBXmNbtoHvPmzsuz6J1qrnchWSs',
  authDomain: 'kanban-arjuna.firebaseapp.com',
  databaseURL: 'https://kanban-arjuna.firebaseio.com',
  projectId: 'kanban-arjuna',
  storageBucket: 'kanban-arjuna.appspot.com',
  messagingSenderId: '826716105935'
}
const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

export default db
