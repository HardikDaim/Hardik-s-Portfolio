import React from 'react';
import { motion } from 'framer-motion';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Experience = ({ loader }) => {
  const experienceData = [
    {
      role: 'Software Engineer Intern',
      company: 'VRV Security',
      duration: 'Dec 2024 - June 2025 (OnGoing)',
      responsibilities: [
        'As it is an ongoing internship i will update it after completion.',
      ],
    }
    ,
    {
      role: 'Core Technical Member',
      company: 'Google Developers Group (GDG)',
      duration: 'Sep 2024 - Present',
      responsibilities: [
        'Collaborated with a global community of developers to promote innovative technology solutions.',
        'Led and participated in hands-on workshops, hackathons, and tech talks focused on Google Cloud, Machine Learning, and Web Development tools.',
        'Organized and contributed to events that engaged developers in building scalable applications.',
        'Mentored peers and new developers to foster community growth and knowledge sharing.',
        'Worked closely with fellow tech enthusiasts to solve real-world problems using Google’s latest technologies.'
      ],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Hirer.co',
      duration: 'Mar 2024 - May 2024',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js.',
        'Collaborated with cross-functional teams to deliver high-quality products.',
        'Implemented CI/CD pipelines to streamline deployment processes.',
        'Designed and implemented user interfaces with HTML, CSS, and JavaScript.',
        'Optimized web applications for maximum speed and scalability.',
        'Worked closely with UX designers to create user-friendly experiences.',
      ],
    }
  ];

  return (
    <div className='min-h-screen max-w-7xl px-2 mx-auto flex flex-col items-center justify-start mb-20 md:mb-0'>
      <motion.h2 
        className="text-5xl md:text-7xl font-bold mb-10 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {loader ? <Skeleton width={400}/>: 'Experience'}
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 max-w-7xl mx-4">
        {loader ? (
          <>
              {Array.from({length: experienceData.length}).map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                  <Skeleton height={40} width={800} className="mb-4" />
                  <Skeleton height={30} width={150} className="mb-2" />
                  <Skeleton height={20} width={100} className="mb-4" />
                  <Skeleton count={5} height={20} className="mb-2" />
                </div>
              ))}
          </>
        ) : (
          experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl text-center md:text-start font-semibold mb-2 text-gray-800 dark:text-gray-200">{job.role}</h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-400">{job.company}</h4>
              <p className="text-md text-gray-500 dark:text-gray-300 mb-4">{job.duration}</p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Experience;
