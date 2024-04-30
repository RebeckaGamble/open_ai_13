import React, { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
