import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skills = ({ loader }) => {
  const skillsData = [
    { name: "Next.js", level: "Expert" },
    { name: "React.js", level: "Expert" },
    { name: "GraphQL", level: "Expert" },
    { name: "Web Sockets", level: "Expert" },
    { name: "Redux", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "SQL/MongoDB", level: "Intermediate" },
    { name: "JavaScript", level: "Expert" },
    { name: "HTML & CSS", level: "Expert" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Java Programming", level: "Advanced" },
  ];

  return (
    <div className="relative isolate flex flex-col items-center justify-center">
      <div className="container px-2 mx-auto flex flex-col items-center justify-start mb-20">
        <>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 container mx-auto">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-1 py-2 md:p-6 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xs md:text-2xl text-center font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
                <p className="text-xs md:text-lg text-gray-600 dark:text-gray-400">
                  {skill.level}
                </p>
              </motion.div>
            ))}
          </div>
        </>
      </div>
      {/* Bottom Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Skills;
