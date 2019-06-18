import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBa-IkJE4CgGE3grsK9VcKXMqCEhlm3koY",
    authDomain: "bora-ajudar-37204.firebaseapp.com",
    databaseURL: "https://bora-ajudar-37204.firebaseio.com",
    projectId: "bora-ajudar-37204",
    storageBucket: "bora-ajudar-37204.appspot.com",
    messagingSenderId: "30884737272",
    appId: "1:30884737272:web:91da78398d99e8e0"
  }

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()


export default base