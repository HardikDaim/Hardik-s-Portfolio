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
    <>
      <div className="bg-white dark:bg-black ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center pt-2">
            <h2 className="text-xs md:text-sm border border-gray-400 dark:border-gray-600 p-1 rounded-md">
              Access free PTU Notes & PYQs from{" "}
              <span className="text-blue-600 dark:text-blue-400 hover:underline">
                <Link to="/btech/cse/study-material">here</Link>
              </span>
              
            </h2>
          </div>
        </div>
      </div>

      <div className="border-b shadow-lg bg-white dark:bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-2 pb-4 pt-2">
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
                  className=" text-xs relative font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex items-center"
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
