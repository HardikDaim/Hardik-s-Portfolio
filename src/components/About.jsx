// About.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import about from "../assets/about.jpeg";

const About = ({ projectsRef }) => {
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
    <div className="relative isolate min-h-screen flex flex-col items-center justify-center">
      {/* Top Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute -right-60 md:-right-96 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="container px-2 mx-auto flex flex-col items-center justify-start mb-10 md:mb-20">
        <>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
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
      </div>
    </div>
  );
};

export default About;
