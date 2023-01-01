import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
export const LingoAuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const auth = getAuth(app);








const UserContext = ({children}) => {
    const [user, setUser]=useState({});
    const [loading, setLoading]=useState(true);
    const [theme, setTheme]=useState('light');


    // google sign in 
const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
}

// github sign in
const githubSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
}

// email and password with create user
const emailAndPasswordSign =(email, password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
} 

// login with email and password
const loginUser =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

// update user profile

const updateUserProfile = (userProfile)=>{
    return updateProfile(user, userProfile);
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
            setLoading(false)
        }else{
            setUser({})
        }
    })
    return ()=> unSubscribe();
},[])

// light and dark mood style 
const toggleTheme =()=>{
  return setTheme((cur)=> cur === 'light'? 'dark':'light')



}

const lingoAuth = {user, loading, theme, toggleTheme,loginUser, updateUserProfile, emailAndPasswordSign , googleSignIn, githubSignIn, loginOutUser  };
    return (
       <LingoAuthContext.Provider value={lingoAuth}  >
        {children}
       </LingoAuthContext.Provider>
    );
};

export default UserContext;