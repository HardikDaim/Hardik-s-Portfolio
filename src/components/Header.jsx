import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa"; // Example icon
import ThemeToggle from "./ThemeToggle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Header = ({ loader }) => {
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
                className="flex items-center space-x-2"
              >
                <FaHome className="text-2xl text-blue-500" />
                <h1 className="text-2xl font-bold">Hardik</h1>
              </motion.div>
            )}
          </div>
          {loader ? (
            <Skeleton height={30} width={100} />
          ) : (
            <ThemeToggle />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
