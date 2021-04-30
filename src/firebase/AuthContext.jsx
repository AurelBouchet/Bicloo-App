/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return firebase.auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
