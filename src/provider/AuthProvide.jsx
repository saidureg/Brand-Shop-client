import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvide = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLogin = (googleProvide) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvide);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, googleLogin, loading, signIn, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvide.propTypes = {
  children: PropTypes.node,
};

export default AuthProvide;
