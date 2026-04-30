import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

////basic stuff
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  ////creating / registering user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //// load previously saved user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (savedUser) => {
      setUser(savedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  ////logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // console.log("Sign-out successful.");
        toast.success("Sign-out successful.");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error);
      });
  };

  ////login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //// upload name and photo
  const uploadNameAndPhoto = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authData = {
    user,
    setUser,
    createUser,
    logout,
    login,
    uploadNameAndPhoto,
    googleLogin,
    loading,
    setLoading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
