import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const values = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
