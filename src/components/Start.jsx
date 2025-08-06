import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { motion } from "framer-motion";

const Start = () => {
  const testimonials = [
    {
      quote:
        "My expertise as a Software Engineer is unmatched, and my ability to solve complex problems with elegant solutions has been a game-changer for my team.",
      name: "Hardik Daim",
      designation: "Software Engineer",
      src: "/hardik-1.webp",
    },
    {
      quote:
        "As a Full Stack Developer, I've an incredible knack for building seamless, end-to-end applications. My work is both efficient and scalable.",
      name: "Hardik Daim",
      designation: "Full Stack Developer",
      src: "/hardik-2.webp",
    },
    {
      quote:
        "My skills as a Web Developer are top-notch. I create visually stunning and highly functional websites that exceed expectations every time.",
      name: "Hardik Daim",
      designation: "Web Developer",
      src: "/hardik-3.webp",
    },
  ];

  const socialLinks = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/hardik-daim-ab0b07251",
      color: "text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6" />,
      href: "https://github.com/HardikDaim",
      color: "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
    },
    {
      title: "LeetCode",
      icon: <IconBrandLeetcode className="h-6 w-6" />,
      href: "https://leetcode.com/u/hardikdaim",
      color: "text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/50",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-6 w-6" />,
      href: "https://www.instagram.com/hardikdaim_17",
      color: "text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/50",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      href: "https://www.facebook.com/hardik.daim",
      color: "text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full filter blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full filter blur-[150px]"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl z-10"
          >
            <AnimatedTestimonials testimonials={testimonials} />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
                Connect with me
              </h3>
              <FloatingDock items={socialLinks} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Start;