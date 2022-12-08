import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
export const LingoAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const auth = getAuth(app);








const UserContext = ({children}) => {
    const [user, setUser]=useState({})

    // google sign in 
const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider);
}
// get log in user 
useEffect(()=>{
    onAuthStateChanged(auth, (currentUser )=>{
        if(currentUser){
            setUser(currentUser.result)
        }else{
            setUser({})
        }
    })

},[])



const lingoAuth = {googleSignIn};
    return (
       <LingoAuthContext.Provider value={lingoAuth}  >
        {children}
       </LingoAuthContext.Provider>
    );
};

export default UserContext;