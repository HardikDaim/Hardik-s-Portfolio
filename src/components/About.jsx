import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="min-h-screen max-w-7xl px-2 mx-auto flex flex-col items-center justify-start">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me!
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-8">
        <motion.img
          src={about}
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
            Hello! I’m Hardik Daim, a passionate Software Engineer with a strong
            background in building and optimizing web applications. With
            experience in React.js, Redux, Node.js, Express.js, and MongoDB, I
            specialize in creating dynamic and responsive applications that
            deliver exceptional user experiences.
          </motion.p>
          <div className="flex items-center justify-center gap-20">
            <motion.button
              className="text-xl md:text-2xl py-4 my-10 px-2 border-4 border-blue-500 bg-blue-500 rounded-xl text-white "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.button>
            <motion.button
              className="text-xl md:text-2xl py-4 my-10 px-2 border-4 border-blue-500 rounded-xl text-gray-800 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.open("https://drive.google.com/file/d/1palGekiNFyF5EFo_vyxLDolZIHVoQlA9/view?usp=share_link","_blank")}
            >
              My Resume
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
