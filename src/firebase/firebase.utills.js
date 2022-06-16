// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyABZagTmbhq_Y0CazERQrHgS-2BSbxEP_w',
  authDomain: 'crown-db-ac830.firebaseapp.com',
  projectId: 'crown-db-ac830',
  storageBucket: 'crown-db-ac830.appspot.com',
  messagingSenderId: '530333586479',
  appId: '1:530333586479:web:ef111813bbe99d55c2e2da',
  measurementId: 'G-WT9MMF5F94',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
