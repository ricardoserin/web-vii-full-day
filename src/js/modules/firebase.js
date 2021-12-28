import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp  = initializeApp({
  apiKey: "AIzaSyCd8SMW32bi7VSaFYfGeB6YtbvbAcvCyoE",
  authDomain: "vii-full-day-gestion-ti.firebaseapp.com",
  databaseURL: "https://vii-full-day-gestion-ti-default-rtdb.firebaseio.com",
  projectId: "vii-full-day-gestion-ti",
  storageBucket: "vii-full-day-gestion-ti.appspot.com",
  messagingSenderId: "76444598937",
  appId: "1:76444598937:web:e331bdfcf9c365a68d6e08",
  measurementId: "${config.measurementId}"
});
// // Initialize Firebase
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// }
export const db = getFirestore();

export const toFirebaseTimestamp = (date) => firebaseApp.firestore.Timestamp.fromDate(date);