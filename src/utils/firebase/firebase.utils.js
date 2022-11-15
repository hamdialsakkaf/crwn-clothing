import { initializeApp } from 'firebase/app';
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPZSFcY-vFl3DWZxz8hwfqDKll20RU7ak",
  authDomain: "crown-clothing-db-b6a89.firebaseapp.com",
  projectId: "crown-clothing-db-b6a89",
  storageBucket: "crown-clothing-db-b6a89.appspot.com",
  messagingSenderId: "937032252221",
  appId: "1:937032252221:web:7df268b6226edb6cc42354"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};