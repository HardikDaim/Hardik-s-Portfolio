import React, { useRef } from "react";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";

const About = ({ projectsRef }) => {
  const data = {
    title: "About Me!",
    description: `
    Hello! I’m Hardik Daim, a passionate and results-driven <strong>Software Engineer</strong> with expertise in <strong>Full Stack Development</strong> and <strong>Web Development</strong>. 
    I specialize in building scalable, high-performance web applications using modern technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, 
    and <strong>MongoDB</strong>. With a strong foundation in <strong>JavaScript</strong>, <strong>TypeScript</strong>, and <strong>RESTful APIs</strong>, I thrive on solving complex problems and delivering 
    seamless user experiences.
  `,
    resumeLink:
      "https://drive.google.com/file/d/1DeTws5zsXO27LdfUUYOheZjQaZXDwIgD/view?usp=share_link",
    image:
      "https://res.cloudinary.com/dpqzwyq66/image/upload/f_auto,q_auto/v1/Portfolio/edtityj633xehfpggivg",
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden flex flex-col items-center justify-center">
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
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200"
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
              className="rounded-xl w-96 h-96 mx-auto shadow-lg "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex flex-col items-center justify-center text-center py-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 dark:text-gray-300 mb-10"
                dangerouslySetInnerHTML={{ __html: data.description }} // Render HTML
              />
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20">
                <motion.button
                  className="text-sm md:text-2xl py-4 px-6 border-4 border-blue-500 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={scrollToProjects}
                >
                  My Projects
                </motion.button>
                <motion.button
                  className="text-sm md:text-2xl py-4 px-6 border-4 border-blue-500 rounded-xl text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
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
