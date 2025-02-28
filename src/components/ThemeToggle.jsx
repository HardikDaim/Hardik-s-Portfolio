import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, selectTheme } from "../store/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${
        currentTheme === "light"
          ? "bg-gray-200 text-black hover:bg-gray-300"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;