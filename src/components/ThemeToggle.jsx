import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, selectTheme } from "../store/themeSlice";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="flex items-center space-x-2 p-1 bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md">
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${
          currentTheme === "light"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
        aria-label="Light Theme"
      >
        <FiSun size={10} />
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${
          currentTheme === "dark"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
        aria-label="Dark Theme"
      >
        <FiMoon size={10} />
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${
          currentTheme === "system"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
        aria-label="System Theme"
      >
        <FiMonitor size={10} />
      </button>
    </div>
  );
};

export default ThemeToggle;
