import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLock } from "react-icons/fa6";

const StudyMaterial = () => {
  const semesters = [
    {
      name: "1st Sem",
      link: "https://drive.google.com/drive/folders/1lLTbw6lO_JzqYCUGvGjt95ON2teu7Zsd?usp=share_link",
    },
    {
      name: "2nd Sem",
      link: "https://drive.google.com/drive/folders/1NKlfT02MOmTAdbaoIVWcrOYsppg8pzFQ?usp=share_link",
    },
    {
      name: "3rd Sem",
      link: "https://drive.google.com/drive/folders/1vvw9aTvyqHzvNjA2yoaXRdOYXlZLiKrU?usp=share_link",
    },
    {
      name: "4th Sem",
      link: "https://drive.google.com/drive/folders/1vsuaec9ME8DokDiflJAc3M8NItaqWsAU?usp=share_link",
    },
    {
      name: "5th Sem",
      link: "https://drive.google.com/drive/folders/1lkndLFKT4Uz0kksW7XLMnW_D1dmt35Wr?usp=share_link",
    },
    {
      name: "6th Sem",
      link: "",
    },
    {
      name: "7th Sem",
      link: "",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Study Material - B.Tech CSE</title>
        <link
          rel="canonical"
          href="https://hardik-daim.vercel.app/btech/cse/study-material"
        />
        <meta
          name="description"
          content="Access study materials for B.Tech CSE, including Computer Networks, DBMS, Software Engineering, and more."
        />
        <meta
          name="keywords"
          content="CGC ASSIGN, CGC Assignments, B.Tech CSE, study materials, Computer Networks, DBMS, Software Engineering, Hardik Daim, Hardik's Portfolio"
        />
        <meta property="og:title" content="Study Material - B.Tech CSE" />
        <meta
          property="og:description"
          content="Access study materials for B.Tech CSE, including Computer Networks, DBMS, Software Engineering, and more."
        />
        <meta
          property="og:url"
          content="https://hardik-daim.vercel.app/btech/cse/study-material"
        />
        <meta
          property="og:image"
          content="https://hardik-daim.vercel.app/study-material.jpg"
        />
        <meta property="og:type" content="webpage" />
      </Helmet>
      <Header />
      <div className="p-4 min-h-screen max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-7xl flex justify-center font-bold mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Study Material
        </motion.h2>
        <motion.h2
          className="text-sm md:text-3xl flex justify-center font-bold my-4 md:my-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          B.Tech - CSE (PTU)
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesters.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer text-xs md:text-lg uppercase"
                  >
                    {item.name}
                  </a>
                ) : (
                  <>
                    <span className="font-semibold text-gray-400 text-xs md:text-lg uppercase">
                      {item.name}
                    </span>
                    <FaLock className="text-gray-500 dark:text-gray-400" />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudyMaterial;
