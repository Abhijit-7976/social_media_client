import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  const handleToggle = () => {
    setDarkMode(mode => !mode);
  };

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        handleToggle,
      }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext used outside the DarkModeContextProvider");
  return context;
};

export { DarkModeProvider, useDarkMode };
