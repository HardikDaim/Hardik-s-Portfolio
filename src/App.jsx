import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeSlice";
import Header from "./components/Header.jsx";
import Start from "./components/Start.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const theme = useSelector(selectTheme);
  const [loader, setLoader] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <SkeletonTheme
      baseColor={isDarkMode ? "#2c2c2c" : "#e0e0e0"}
      highlightColor={isDarkMode ? "#444" : "#f5f5f5"}
    >
      <div>
        <Header loader={loader} />
        <Start loader={loader} />
        <About loader={loader} />
        <Skills loader={loader} />
        <Experience loader={loader} />
        <Projects loader={loader} />
        <Contact loader={loader} />
        <Footer loader={loader} />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: isDarkMode ? "#333" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          }}
        />
      </div>
    </SkeletonTheme>
  );
};

export default App;
