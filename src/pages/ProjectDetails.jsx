import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import projectsData from "../data/ProjectsData";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  // State to manage loading
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen max-w-7xl px-4 mx-auto flex flex-col items-center justify-start my-10">
        {loader ? (
          <div className="shadow-lg rounded-lg p-6 flex flex-col items-center ">
            {/* Title Skeleton */}
            <Skeleton height={40} width={300} className="mb-4" />

            {/* Image Skeleton */}
            <Skeleton
              height={400}
              width={600}
              className="w-full h-auto rounded-lg mb-4"
            />

            {/* Description Skeleton */}
            <Skeleton height={0} width={1000} className="mb-4" />
            <Skeleton height={20} width={200} className="mb-4" />
            <Skeleton height={20} width={150} className="mb-4" />
            <Skeleton height={20} width={100} className="mb-4" />

            {/* Technologies, Features, Highlights Skeletons */}
            <Skeleton height={20} width={200} className="mb-2" />
            <Skeleton height={20} width={150} className="mb-2" />
            <Skeleton height={20} width={100} className="mb-2" />

            <Skeleton height={20} width={200} className="mb-2" />
            <Skeleton height={20} width={150} className="mb-2" />
            <Skeleton height={20} width={100} className="mb-2" />

            <Skeleton height={20} width={200} className="mb-2" />
            <Skeleton height={20} width={150} className="mb-2" />
            <Skeleton height={20} width={100} className="mb-2" />
          </div>
        ) : project ? (
          <motion.div
            className="shadow-lg rounded-lg p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-4 max-w-3xl"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-4 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.description}
            </motion.p>
            <div className="w-full mb-4">
              <motion.h2
                className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Technologies
              </motion.h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {project.technologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="w-full mb-4">
              <motion.h2
                className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Features
              </motion.h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="w-full mb-4">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <strong>Year:</strong> {project.year}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <strong>Role:</strong> {project.role}
              </p>
            </div>
            <div className="w-full mb-4">
              <motion.h2
                className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Highlights
              </motion.h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {project.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center gap-8">
                <motion.button
                  className="text-xs md:text-md py-4 my-10 px-2 border-4 border-blue-500 bg-blue-500 rounded-xl text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() =>
                    window.open(
                     `${project.gitHubLink}`,
                      "_blank"
                    )
                  }
                >
                  View Code on GitHub
                </motion.button>
                <motion.button
                  className="text-xs md:text-md py-4 my-10 px-2 border-4 border-blue-500 rounded-xl text-gray-800 dark:text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() =>
                    window.open(
                     `${project.liveLink}`,
                      "_blank"
                    )
                  }
                >
                  See Live Project
                </motion.button>
              </div>
          </motion.div>
        ) : (
          <div className="text-center text-lg text-gray-800 dark:text-gray-200">
            No Project Found
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
