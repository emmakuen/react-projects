import { useState, useLayoutEffect, createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const LOCAL_STORAGE_KEY = "ppageLocalTheme";
  const LIGHT = "light";
  const DARK = "dark";

  const [theme, setTheme] = useState(LIGHT);
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    null
  );

  useLayoutEffect(() => {
    if (localStorageTheme) {
      return localStorageTheme === DARK ? setTheme(DARK) : setTheme(LIGHT);
    }
    if (!window.matchMedia) return;
    const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeQuery.matches && setTheme(DARK);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    console.log("toggling");
    const updatedTheme = theme === LIGHT ? DARK : LIGHT;
    setTheme(updatedTheme);
    setLocalStorageTheme(updatedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, LIGHT, DARK }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const primaryColor = "#df6678";

export const lightTheme = {
  background: "#fffffc",
  text: "#2d2a27",
  primary: "#df6678",
  accent: "rgba(231, 187, 116, 0.2)",
  secondary: "rgba(223, 102, 120, 0.4)",
  grayPrimary: "#888",
  graySecondary: "rgba(51, 51, 51, 0.25)",
  grayGhost: "rgba(51, 51, 51, 0.1)",
};

export const darkTheme = {
  background: "#2d2a27",
  text: "#fffffc",
  primary: "#df6678",
  accent: "rgba(231, 187, 116, 0.2)",
  secondary: "rgba(223, 102, 120, 0.4)",
  grayPrimary: "#888",
  graySecondary: "rgba(255, 255, 252, 0.25)",
  grayGhost: "rgba(255, 255, 252, 0.1)",
};
