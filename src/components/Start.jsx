import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import yourImage from "../assets/profile.png";

const Start = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.img
          src={yourImage}
          alt="Hardik Daim"
          className="w-96 h-96 rounded-full object-cover mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hardik Daim
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Software Engineer
        </motion.p>
        <div className="flex space-x-4 mt-4">
          <motion.a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-blue-500 hover:text-blue-700"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-gray-200 hover:text-gray-400"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-pink-500 hover:text-pink-700"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-blue-600 hover:text-blue-800"
          >
            <FaFacebook />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Start;
