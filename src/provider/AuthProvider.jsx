import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

////basic stuff
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  ////creating / registering user
  const createUser = (email, password, name, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        uploadNameAndPhoto(name, photoURL);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        alert(errorCode, errorMessage);
      });
  };

  //// load previously saved user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (savedUser) => {
      setUser(savedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  ////logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ////login
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //// upload name and photo
  const uploadNameAndPhoto = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile updated!");
        // ...
        console.log(name, photoURL);
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };
  const authData = {
    user,
    setUser,
    createUser,
    logout,
    login,
    uploadNameAndPhoto,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
