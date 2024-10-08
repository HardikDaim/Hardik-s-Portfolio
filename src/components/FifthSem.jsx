import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet-async";

const FifthSem = () => {
  return (
    <>
      <Helmet>
        <title>5th Semester Study Material - B.Tech CSE</title>
        <link rel="canonical" href="https://hardik-daim.vercel.app/cse/5-sem-exam-material" />
        <meta name="description" content="Access 5th semester study materials for B.Tech CSE, including Computer Networks, DBMS, Software Engineering, and more." />
        <meta name="keywords" content="CGC ASSIGN, CGC Assignments, 5th semester, B.Tech CSE, study materials, Computer Networks, DBMS, Software Engineering, Hardik Daim, Hardik's Portfolio" />
      </Helmet>
      <Header />
      <div className="p-4 min-h-screen max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-7xl flex justify-center font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Study Material
        </motion.h2>
        <motion.h2
          className="text-md md:text-3xl flex justify-center font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          B.Tech - CSE (5th Sem)
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "MST & PTU PYQs",
              link: "https://drive.google.com/drive/folders/1Dq8UveJ4bGwv6IA7rWivQ9E4ShT5Upi1?usp=share_link",
            },
            {
              name: "Computer Networks",
              link: "https://drive.google.com/drive/folders/1-TdEbR584WFzqaKGt0nGzh0M8EFcc7SK?usp=sharing",
            },
            {
              name: "Database Management Systems",
              link: "https://drive.google.com/drive/folders/16PDIUdIsXHsREsjUoAuIqXv79lhhrPVQ?usp=sharing",
            },
            {
              name: "Software Engineering",
              link: "https://drive.google.com/drive/folders/16D7ev_L66LfXHN9tN7ZtRcXYPduaK9nP?usp=share_link",
            },
            {
              name: "Web Technology",
              link: "https://drive.google.com/drive/folders/183utImCAGPQ9IoMnBYFMK9gJph_AXg12?usp=share_link",
            },
            {
              name: "FLAT",
              link: "https://drive.google.com/drive/folders/16R98ur8cM98AaYo8PRJ6BAnzUo7nGN0m?usp=share_link",
            },
            {
              name: "ERP",
              link: "https://drive.google.com/drive/folders/1PiCJiST1ja3r0UcToyLNIZpWoP8tmtBY?usp=share_link",
            },
            {
              name: "COI",
              link: "https://drive.google.com/drive/folders/13J_-edqSaBq_zdMmbLCSvLr7-55fcizm?usp=sharing",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline text-lg uppercase"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FifthSem;
