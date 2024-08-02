import React from "react";
import { motion } from "framer-motion";
import TestimonialData from "../data/TestimonialData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Testimonial = ({loader}) => {
  return (
    <section className="min-h-screen pb-12">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
       {loader ? <Skeleton width={600} /> : ' What People Say?'}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {loader ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Skeleton circle={true} height={64} width={64} />
                <div className="ml-4">
                  <Skeleton width={120} height={20} />
                  <Skeleton width={80} height={16} />
                </div>
              </div>
              <Skeleton count={3} />
            </div>
          ))
        ) : (
          TestimonialData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{item.testimonial}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  </section>
  );
};

export default Testimonial;
