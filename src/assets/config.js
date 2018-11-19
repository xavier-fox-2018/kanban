import firebase from 'firebase'

// Initialize Firebase
var config = {
 
}
let database = firebase.initializeApp(config).database()

export default database