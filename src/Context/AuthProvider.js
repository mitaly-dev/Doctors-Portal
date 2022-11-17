import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    // create user 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user signIn 
    const userSignIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // email validate 
    const emailValidation = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    // update profile 
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // forget password 
    const forgetUserPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    // log out 
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    const value = {
        user,
        createUser, 
        userSignIn,
        emailValidation,
        updateUserProfile,
        forgetUserPassword,
        logOut,
        signInWithGoogle,
        loading,setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;