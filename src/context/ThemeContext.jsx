import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
      document.documentElement.classList.add(saveTheme);
      setTheme(JSON.parse(saveTheme));
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", JSON.stringify("dark"));
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", JSON.stringify("light"));
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
