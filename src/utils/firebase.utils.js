import { initializeApp} from 'firebase/app'
import { getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhLa5FYZ8cbqFP5luecb1RDDVhhre-KTE",
    authDomain: "crwn-clothing-db-8a46e.firebaseapp.com",
    projectId: "crwn-clothing-db-8a46e",
    storageBucket: "crwn-clothing-db-8a46e.appspot.com",
    messagingSenderId: "1070084040213",
    appId: "1:1070084040213:web:e13cdb1f27f2b3f076901c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider =new GoogleAuthProvider();
  provider.setCustomparameters({
    prompt: "select_account"
  });