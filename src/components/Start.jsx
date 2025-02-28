import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../App.css";

const Start = () => {
  const data = {
    image:
      "https://res.cloudinary.com/dpqzwyq66/image/upload/f_auto,q_auto/v1/Portfolio/lcqyj9cxaeusrapojavg",
    name: "Hardik Daim",
    title: "Software Engineer",
    linkedIn: "https://www.linkedin.com/in/hardik-daim-ab0b07251",
    github: "https://github.com/HardikDaim",
    instagram: "https://www.instagram.com/hardikdaim_17",
    leetCode: "https://leetcode.com/u/hardikdaim",
    facebook: "https://www.facebook.com/hardik.daim",
  };

  return (
    <div className="relative isolate min-h-screen flex flex-col items-center justify-center">
      {/* Top Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-60  md:-top-80 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Content */}
      <div className="container w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.img
            src={data.image}
            alt="Hardik Daim"
            className="w-72 h-72 rounded-full border-4 border-blue-500 object-cover mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.name}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.p>
          <div className="flex space-x-4">
            <motion.a
              href={data.leetCode}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl text-orange-400 hover:text-orange-500"
            >
              <img
                className="h-10 w-10 sm:h-12 sm:w-12"
                src="/leetcode.png"
                alt="LeetCode"
              />
            </motion.a>
            <motion.a
              href={data.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl text-blue-700 hover:text-blue-900"
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
              className="text-4xl sm:text-5xl text-gray-700 dark:text-gray-200 hover:text-gray-400"
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
              className="text-4xl sm:text-5xl text-pink-500 hover:text-pink-700"
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
              className="text-4xl sm:text-5xl text-blue-600 hover:text-blue-800"
            >
              <FaFacebook />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-800 via-yellow-500 to-yellow-300 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Start;