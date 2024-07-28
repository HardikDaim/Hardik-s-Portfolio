import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Projects = ({loader}) => {

    const projectsData = [
        {
            title: 'E-commerce Platform',
            description: 'A full-featured e-commerce platform built with React, Redux, Node.js, and MongoDB.',
            link: '#',
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
            link: '#',
        },
        {
            title: 'Real-time Chat Application',
            description: 'A real-time chat application using Socket.IO, Node.js, and React for seamless communication.',
            link: '#',
        },
        {
            title: 'Social Media App',
            description: 'A Social Media App build using React, Redux, MongoDB, Express.js where we can share our Photos with Friends.',
            link: '#',
        },
        {
            title: 'Task Manager',
            description: 'A task management tool built with React and Redux, featuring drag-and-drop functionality.',
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen max-w-7xl px-2 mx-auto flex flex-col items-center justify-start mb-20 md:mb-0">
            {loader ? (
                <>
                    <Skeleton width={300} height={60} className="mb-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center">
                                <Skeleton width={200} height={30} className="mb-2" />
                                <Skeleton width={150} height={20} />
                                <Skeleton width={100} height={20} className="mt-2" />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-10 text-gray-800 dark:text-gray-200"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Project
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
