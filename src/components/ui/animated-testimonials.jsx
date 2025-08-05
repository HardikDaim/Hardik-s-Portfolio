import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]); // Added handleNext to dependency array

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 pt-7 pb-2 md:py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence mode="wait">
              {" "}
              {/* Added mode="wait" for smoother transitions */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              {testimonials[active].designation}
            </p>

            </div>
            <div className="flex md:hidden items-center justify-center gap-4 py-4 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-6 text-black dark:text-gray-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-6 text-black dark:text-gray-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
            <motion.p className="text-lg text-gray-500 md:mt-8  dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <motion.div className="flex items-center justify-center mt-4">
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1DeTws5zsXO27LdfUUYOheZjQaZXDwIgD/view",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="flex md:hidden px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            >
              Download Resume
            </button>

            </motion.div>
          </motion.div>
          <div className="hidden md:flex gap-4 pt-12 md:pt-0">
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group/button"
                >
                  <IconArrowLeft className="h-5 w-6 text-black dark:text-gray-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group/button"
                >
                  <IconArrowRight className="h-5 w-6 text-black dark:text-gray-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DeTws5zsXO27LdfUUYOheZjQaZXDwIgD/view",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
              >
                Download Resume
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
