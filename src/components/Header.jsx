import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa"; // Example icon
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="border-b shadow-lg bg-white dark:bg-black sticky top-0 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-2 py-4">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 "
            >
              <FaHome className="text-2xl text-blue-500" /> 
              <h1 className="text-2xl font-bold">Hardik</h1>
            </motion.div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
