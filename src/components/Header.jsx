import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa"; // Example icon
import ThemeToggle from "./ThemeToggle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ loader }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isStudyMaterialPage = location.pathname === "/btech/cse/study-material";

  // Add scroll event listener to detect if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div
        className={`sticky w-full top-0 z-50 ${
          isScrolled
            ? "bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-3xl border-b border-gray-200 dark:border-gray-700"
            : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Home Link */}
            <div className="flex items-center">
              {loader ? (
                <div className="flex items-center space-x-2">
                  <Skeleton circle={true} height={32} width={32} />
                  <Skeleton height={24} width={100} />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <FaHome className="text-2xl text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Hardik
                  </h2>
                </motion.div>
              )}
            </div>

            {/* Navigation Links and Theme Toggle */}
            {loader ? (
              <div className="flex items-center justify-center gap-4 md:gap-8">
                <Skeleton height={35} width={80} />
                <Skeleton height={30} width={100} />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <Link
                  to="/blog"
                  className="text-xs md:text-sm bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 px-4 py-2 rounded-lg  flex items-center transition-colors duration-300"
                >
                  Blogs
                </Link>
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
