import React from "react";
import { motion } from "framer-motion";
import AnimatedLaptop from "./ui/animatedLaptop";

const About = ({ projectsRef }) => {
  const data = {
    title: "About Me",
    description: `
      Hello! I'm Hardik Daim, a passionate and results-driven <span class="text-blue-500 font-medium">Software Engineer</span> with expertise in <span class="text-blue-500 font-medium">Full Stack Development</span> and <span class="text-blue-500 font-medium">Web Development</span>. 
      I specialize in building scalable, high-performance web applications using modern technologies like <span class="text-blue-500 font-medium">React.js</span>, <span class="text-blue-500 font-medium">Next.js</span>, <span class="text-blue-500 font-medium">Node.js</span>, 
      and <span class="text-blue-500 font-medium">MongoDB</span>. With a strong foundation in <span class="text-blue-500 font-medium">JavaScript</span>, <span class="text-blue-500 font-medium">TypeScript</span>, and <span class="text-blue-500 font-medium">RESTful APIs</span>, 
      I thrive on solving complex problems and delivering seamless user experiences.
    `,
    resumeLink: "https://drive.google.com/file/d/1DeTws5zsXO27LdfUUYOheZjQaZXDwIgD/view?usp=share_link",
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center my-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-indigo-500 rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Laptop Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <AnimatedLaptop />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
              <p 
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(data.resumeLink, "_blank")}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;