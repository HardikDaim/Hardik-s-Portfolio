import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const Skills = ({ loader }) => {
  const skillsData = [
    {
      name: "Next.js",
      level: "Expert",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "React.js",
      level: "Expert",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "GraphQL",
      level: "Expert",
      icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Web Sockets",
      level: "Expert",
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Redux",
      level: "Advanced",
      icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Node.js",
      level: "Advanced",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Express.js",
      level: "Advanced",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "SQL/MongoDB",
      level: "Intermediate",
      icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "JavaScript",
      level: "Expert",
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "HTML & CSS",
      level: "Expert",
      icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
    {
      name: "Java Programming",
      level: "Advanced",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden flex flex-col items-center justify-center">
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
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skillsData.map((skill, index) => (
              <GridItem
                key={index}
                area=""
                icon={skill.icon}
                title={skill.name}
                description={skill.level}
              />
            ))}
          </ul>
        </>
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

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 shadow-lg">
        <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Skills;
