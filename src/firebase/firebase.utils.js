import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhot-tW46q3FOWFkojN0K3C7hsUVdIYDg",
    authDomain: "crown-db-19ce3.firebaseapp.com",
    databaseURL: "https://crown-db-19ce3.firebaseio.com",
    projectId: "crown-db-19ce3",
    storageBucket: "crown-db-19ce3.appspot.com",
    messagingSenderId: "36667055083",
    appId: "1:36667055083:web:3c38c4ad2f61720b46d7ae",
    measurementId: "G-4CQNENVD1R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
   // console.log(snapShot)

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({

                displayName,
                email,
                createdAt,
                ...additionalData

            })
        }catch (e) {
            console.log("error creating user",e.message)
        }
    }
        return userRef;
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'Select Account'});
provider.addScope('profile');
provider.addScope('email');
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;