import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD622Qp1bEucFs7usTou1CUiT_wNtyThVk",
  authDomain: "react-redux-e398c.firebaseapp.com",
  databaseURL: "https://react-redux-e398c.firebaseio.com",
  projectId: "react-redux-e398c",
  storageBucket: "react-redux-e398c.appspot.com",
  messagingSenderId: "664661184807",
  appId: "1:664661184807:web:7d104f0eace637edb9d902",
  measurementId: "G-8FFW1395D4",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });
  return await batch.commit();
};

export const collectionSnapShotToMap = (collectionSnapShot) => {
  const transformedCollection = collectionSnapShot.docs.map((docSnapShot) => {
    const { title, items } = docSnapShot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapShot.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
