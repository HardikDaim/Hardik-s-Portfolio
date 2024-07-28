import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

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
    }, 1500);
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
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home loader={loader} />} />
          <Route
            path="/project/details/:projectId"
            element={<ProjectDetails loader={loader}/>}
          />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: isDarkMode ? "#333" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            },
          }}
        />
      </Router>
    </SkeletonTheme>
  );
};

export default App;
