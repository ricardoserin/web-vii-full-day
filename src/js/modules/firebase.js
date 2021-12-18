import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCd8SMW32bi7VSaFYfGeB6YtbvbAcvCyoE",
  authDomain: "vii-full-day-gestion-ti.firebaseapp.com",
  projectId: "vii-full-day-gestion-ti",
  storageBucket: "vii-full-day-gestion-ti.appspot.com",
  messagingSenderId: "76444598937",
  appId: "1:76444598937:web:e331bdfcf9c365a68d6e08",
  measurementId: "${config.measurementId}"
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export const firestore = firebase.firestore();
export const toFirebaseTimestamp = (date) => firebase.firestore.Timestamp.fromDate(date);