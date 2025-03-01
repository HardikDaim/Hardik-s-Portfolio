import React from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GlowingEffect } from "./ui/glowing-effect";

const Experience = ({ loader }) => {
  const experienceData = [
    {
      role: "Core Technical Member",
      company: "Google Developers Group (GDG)",
      duration: "Sep 2024 - Present",
      responsibilities: [
        "Collaborated with a global community of developers to promote innovative technology solutions.",
        "Led and participated in hands-on workshops, hackathons, and tech talks focused on Google Cloud, Machine Learning, and Web Development tools.",
        "Organized and contributed to events that engaged developers in building scalable applications.",
        "Mentored peers and new developers to foster community growth and knowledge sharing.",
        "Worked closely with fellow tech enthusiasts to solve real-world problems using Google’s latest technologies.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Hirer.co",
      duration: "Mar 2024 - May 2024",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality products.",
        "Implemented CI/CD pipelines to streamline deployment processes.",
        "Designed and implemented user interfaces with HTML, CSS, and JavaScript.",
        "Optimized web applications for maximum speed and scalability.",
        "Worked closely with UX designers to create user-friendly experiences.",
      ],
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <div className="container px-2 mx-auto flex flex-col items-center justify-start mb-10 md:mb-20">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {loader ? <Skeleton width={400} /> : "Experience"}
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 container mx-4">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className="relative rounded-2xl border  md:rounded-3xl"
            >
              <GlowingEffect
                spread={100}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <motion.div
                className=" bg-opacity-50 rounded-2xl  md:rounded-3xl shadow-lg p-6 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg md:text-2xl text-center md:text-start font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {job.role}
                </h3>
                <h4 className="text-xs md:text-lg text-gray-500 dark:text-gray-300">
                  {job.company}
                </h4>
                <p className="text-xs md:text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {job.duration}
                </p>
                <ul className="text-xs md:text-sm list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li className="pb-2" key={idx}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute -left-40 md:left-0 bottom-80 md:bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
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

export default Experience;
