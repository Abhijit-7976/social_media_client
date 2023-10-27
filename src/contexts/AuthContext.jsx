import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [curUser, setCurUser] = useState(
    () => JSON.parse(localStorage.getItem("current-user")) || null
  );

  useEffect(() => {
    localStorage.setItem("current-user", JSON.stringify(curUser));
  }, [curUser]);

  return (
    <AuthContext.Provider value={{ curUser, setCurUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext used outside AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
