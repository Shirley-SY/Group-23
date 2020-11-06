//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

  // Your API stuff goes here;  get it from firebase console
  apiKey: "AIzaSyBekHDqDcKR0NrrcltHw6tmEw3mbDLRGS0",
  authDomain: "mango-3a256.firebaseapp.com",
  databaseURL: "https://mango-3a256.firebaseio.com",
  projectId: "mango-3a256",
  storageBucket: "mango-3a256.appspot.com",
  messagingSenderId: "941279657994",
  appId: "1:941279657994:web:967fbe2a315ef308471ff3"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();