import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAZOnU8hEJnLt631qthqE219_qQG9sJNy0",
  authDomain: "dashboarddbt.firebaseapp.com",
  databaseURL: "https://dashboarddbt.firebaseio.com",
  projectId: "dashboarddbt",
  storageBucket: "",
  messagingSenderId: "999536632976",
  appId: "1:999536632976:web:6689590054b321ba"
};
firebase.initializeApp(firebaseConfig);

export default firebase 