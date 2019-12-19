import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
    }
  )
}

export default ({ app, store }, inject) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('signin', { uid: user.uid, email: user.email })
    } else {
      store.dispatch('signout')
    }
  })
  inject('firebase', firebase)
}
