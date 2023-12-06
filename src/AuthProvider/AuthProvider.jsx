import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(app);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google sign in
  const googleSin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // observe the user credentials
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user state", currentUser);
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const email = currentUser.email;
        console.log(email);
        fetch(
          "https://travel-volunteer-server-iqao7llqm-randomhabibur.vercel.app/jwt",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            localStorage.setItem("token", data.token);
          })
          .catch((err) => console.log(err));
      } else {
        localStorage.removeItem("token");
      }
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    loading,
    user,
    createUser,
    loginUser,
    googleSin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
