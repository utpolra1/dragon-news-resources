import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const authContext = createContext(null);

const auth= getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setuser]=useState(null);

    const googleLogin=()=>{
      return signInWithPopup(auth, provider)
    }

    const registerUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unSubscribe=onAuthStateChanged(auth, (user) => {
        setuser(user);
      })
      return ()=>{
        unSubscribe();
      }
    }, [])

    const logout =()=>{
      return signOut(auth)
    }

    const authinfo={
        user,
        registerUser,
        loginUser,
        logout,
        googleLogin

    }
  return (
    <div>
      <authContext.Provider value={authinfo}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
