import dotenv from "dotenv"
dotenv.config();
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId:process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

function App() {

  return <div>
    i did not know map returns  the arrays index
  </div>
}

export default App
