import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../App.css"

const Start = ({ loader }) => {
  const data = {
    image: "https://res.cloudinary.com/dpqzwyq66/image/upload/v1722176092/Portfolio/znksvzznuxtiytbovktt.png",
    name: "Hardik Daim",
    title: "Software Engineer",
    linkedIn: "https://www.linkedin.com/in/hardik-daim-ab0b07251",
    github: "https://github.com/HardikDaim",
    instagram: "https://www.instagram.com/hardikdaim_17",
    leetCode: "https://leetcode.com/u/hardikdaim",
    facebook: "https://www.facebook.com/hardik.daim",
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center">
      {loader ? (
        <div className="flex flex-col items-center">
          <Skeleton circle={true} height={384} width={384} />
          <Skeleton height={40} width={200} className="mt-4" />
          <Skeleton height={30} width={150} className="mt-2" />
          <div className="flex space-x-4 mt-4">
            <Skeleton height={40} width={40} />
            <Skeleton height={40} width={40} />
            <Skeleton height={40} width={40} />
            <Skeleton height={40} width={40} />
            <Skeleton height={40} width={40} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <motion.img
            src={data.image}
            alt="Hardik Daim"
            className="w-96 h-96 rounded-full object-cover mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h2
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.name}
          </motion.h2>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.p>
          <div className="flex space-x-4 mt-4">
            <motion.a
              href={data.leetCode}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl text-orange-400 hover:text-orange-500"
            >
              <img className="h-[48px] w-[48px] dark:logo-dark-mode" src="/leetcode.png" />
            </motion.a>
            <motion.a
              href={data.linkedIn}
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
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl text-gray-700 dark:text-gray-200 hover:text-gray-400"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={data.instagram}
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
              href={data.facebook}
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
      )}
    </div>
  );
};

export default Start;
