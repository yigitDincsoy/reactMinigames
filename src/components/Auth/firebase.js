import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB_0lJ52VvKGEz4oalSDFsOyQT0SdOnN-M",
    authDomain: "nsccpracticeproject.firebaseapp.com",
    projectId: "nsccpracticeproject",
    storageBucket: "nsccpracticeproject.appspot.com",
    messagingSenderId: "108449566041",
    appId: "1:108449566041:web:a55fffcd2fc6b748f8d048"
  };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}