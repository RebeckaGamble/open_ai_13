"use client";
import React, { createContext, useState, useContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [sessionToken, setSessionToken] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


 const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to login user");
    }

    const { sessionToken, email } = await response.json();

    setLoggedIn(true);
    setEmail(email)
    setPassword(password)
    setUsername(username);
    setSessionToken(sessionToken);

    return { username, sessionToken, email };
  } catch (error) {
    console.error("Login error:", error);
    setError("Failed to login user");
    throw error;
  }
};

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionToken, username }),
      });

      if (response.ok) {
        setLoggedIn(false);
        setUsername("");
        setSessionToken("");
      } else {
        throw new Error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        logout,
        username,
        setUsername,
        loggedIn,
        setLoggedIn,
        sessionToken,
        setSessionToken, 
        email,
        setEmail,
        password,
        setPassword
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLoginContext(){
  return useContext(LoginContext)
}