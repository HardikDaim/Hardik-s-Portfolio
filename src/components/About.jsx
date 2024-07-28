import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import about from "../assets/about.jpeg";

const About = ({ loader }) => {
  const data = {
    title: "About Me!",
    description: `
        Hello! I’m Hardik Daim, a passionate Software Engineer with a strong
        background in building and optimizing web applications. With
        experience in React.js, Redux, Node.js, Express.js, and MongoDB, I
        specialize in creating dynamic and responsive applications that
        deliver exceptional user experiences.
      `,
    image: about,
  };

  return (
    <div className="min-h-screen max-w-7xl px-2 mx-auto flex flex-col items-center justify-start">
      {loader ? (
        <div className="w-full flex flex-col items-center">
          <Skeleton height={50} width={300} className="my-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 py-20 gap-8">
            <Skeleton height={400} width={600} className="rounded-xl" />
            <div className="text-2xl py-10">
              <Skeleton count={6} className="text-justify mb-4" />
              <div className="flex items-center justify-center gap-20">
                <Skeleton height={60} width={150} />
                <Skeleton height={60} width={150} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 gap-8">
            <motion.img
              src={data.image}
              alt="About Me"
              className="rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="text-2xl py-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-justify"
              >
                {data.description}
              </motion.p>
              <div className="flex items-center justify-center gap-20">
                <motion.button
                  className="text-lg md:text-2xl py-4 my-10 px-2 border-4 border-blue-500 bg-blue-500 rounded-xl text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  My Projects
                </motion.button>
                <motion.button
                  className="text-lg md:text-2xl py-4 my-10 px-2 border-4 border-blue-500 rounded-xl text-gray-800 dark:text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1palGekiNFyF5EFo_vyxLDolZIHVoQlA9/view?usp=share_link",
                      "_blank"
                    )
                  }
                >
                  My Resume
                </motion.button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
