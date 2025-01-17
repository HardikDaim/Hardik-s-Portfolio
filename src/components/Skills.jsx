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
    <div className="max-w-7xl px-2 mx-auto flex flex-col items-center justify-start mb-20">
      {loader ? (
        <>
          <Skeleton width={300} height={60} className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Array.from({ length: skillsData.length }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <Skeleton width={200} height={40} className="mb-2" />
                <Skeleton width={150} height={30} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
      )}
    </div>
  );
};

export default Skills;
