import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeSlice";
import Header from "./components/Header.jsx";
import Start from "./components/Start.jsx";
import About from "./components/About.jsx";

const App = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <div>
      <Header />
      <Start />
      <About />
    </div>
  );
};

export default App;
