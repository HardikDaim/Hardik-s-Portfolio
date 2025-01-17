// About.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import about from "../assets/about.jpeg";

const About = ({ loader, projectsRef }) => {
  const data = {
    title: "About Me!",
    description: `
        Hello! I’m Hardik Daim, a passionate Software Engineer with a strong
        background in building and optimizing web applications. With
        experience in React.js, Redux, Node.js, Express.js, and MongoDB, I
        specialize in creating dynamic and responsive applications that
        deliver exceptional user experiences.
      `,
    resumeLink:
      "https://drive.google.com/file/d/1DeTws5zsXO27LdfUUYOheZjQaZXDwIgD/view?usp=share_link",
    image: about,
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl px-2 mx-auto flex flex-col items-center justify-start mb-10 md:mb-20">
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
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 gap-8">
            <motion.img
              src={data.image}
              alt="About Me"
              className="rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="text-sm md:text-lg py-10">
            <div className="flex items-center justify-center text-center gap-20">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              
              >
                {data.description}
              </motion.p>
              </div>
              <div className="flex items-center justify-center gap-20">
                <motion.button
                  className="text-sm md:text-2xl py-4 mt-10 px-2 border-4 border-blue-500 bg-blue-500 rounded-xl text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={scrollToProjects}
                >
                  My Projects
                </motion.button>
                <motion.button
                  className="text-sm md:text-2xl py-4 mt-10 px-2 border-4 border-blue-500 rounded-xl text-gray-800 dark:text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => window.open(data.resumeLink, "_blank")}
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
