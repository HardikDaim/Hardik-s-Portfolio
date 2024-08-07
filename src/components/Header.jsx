import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa"; // Example icon
import ThemeToggle from "./ThemeToggle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ loader }) => {
  const navigate = useNavigate();
  return (
    <div className="border-b shadow-lg bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-2 py-4">
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
                <h2 className="text-2xl font-bold">Hardik</h2>
              </motion.div>
            )}
          </div>

          {loader ? (
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <Skeleton height={35} width={80} />
              <Skeleton height={30} width={100} />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <Link
                to="/blog"
                className="relative font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex items-center"
              >
                Blogs
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-2 -right-4 inline-flex items-center justify-center w-10 h-5 text-xs font-bold text-white  bg-red-500 rounded-full"
                >
                  New
                </motion.span>
              </Link>
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
