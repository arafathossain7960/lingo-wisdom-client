import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
export const LingoAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const auth = getAuth(app);








const UserContext = ({children}) => {
    const [user, setUser]=useState({})

    // google sign in 
const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider);
}

// github sign in
const githubSignIn =()=>{
    return signInWithPopup(auth, githubProvider);
}

// email and password with create user
const emailAndPasswordSign =(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
} 

// login with email and password
const loginUser =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}
// login out 
const loginOutUser =()=>{
    signOut(auth)
    .then(result =>{

    })
    .catch(error=>{
        
    })
}

// get log in user 
useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (currentUser )=>{
        if(currentUser){
            setUser(currentUser)
        }else{
            setUser({})
        }
    })
    return ()=> unSubscribe();
},[])



const lingoAuth = {user,loginUser, emailAndPasswordSign , googleSignIn, githubSignIn, loginOutUser  };
    return (
       <LingoAuthContext.Provider value={lingoAuth}  >
        {children}
       </LingoAuthContext.Provider>
    );
};

export default UserContext;