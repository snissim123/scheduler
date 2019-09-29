import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfJuoZNBv9saDxNwKoyNc64yHgnShEJRU",
      authDomain: "scheduler-675e2.firebaseapp.com",
      databaseURL: "https://scheduler-675e2.firebaseio.com",
      projectId: "scheduler-675e2",
      storageBucket: "",
      messagingSenderId: "842196675776",
      appId: "1:842196675776:web:2fde45e0a661a172971125",
      measurementId: "G-7BG3P8MK3M"
    };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref();

export { db };