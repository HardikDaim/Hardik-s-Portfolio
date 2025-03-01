import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "../App.css";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const Start = () => {
  const testimonials = [
    {
      quote:
        "My expertise as a Software Engineer is unmatched and ability to solve complex problems with elegant solutions has been a game-changer for my team.",
      name: "Hardik Daim",
      designation: "Software Engineer",
      src: "https://res.cloudinary.com/dpqzwyq66/image/upload/f_auto,q_auto/v1/Portfolio/edtityj633xehfpggivg",
    },
    {
      quote:
        "As a Full Stack Developer, I've an incredible knack for building seamless, end-to-end applications. My work is both efficient and scalable.",
      name: "Hardik Daim",
      designation: "Full Stack Developer",
      src: "https://res.cloudinary.com/dpqzwyq66/image/upload/f_auto,q_auto/v1/Portfolio/hz4rdskrbe8rrqen2crf",
    },
    {
      quote:
        "My skills as a Web Developer are top-notch. I create visually stunning and highly functional websites that exceed expectations every time.",
      name: "Hardik Daim",
      designation: "Web Developer",
      src: "https://res.cloudinary.com/dpqzwyq66/image/upload/f_auto,q_auto/v1/Portfolio/j4nkvx5pdnzmjlw8hard",
    },
  ];

  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/hardik-daim-ab0b07251",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/HardikDaim",
    },
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/hardikdaim",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/hardikdaim_17",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/hardik.daim",
    },
  ];

  return (
    <>

   
    <div className="relative isolate min-h-screen flex flex-col items-center justify-center">
      {/* Top Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-60 md:-top-80 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-200 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Content */}
      <div className="container w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <AnimatedTestimonials testimonials={testimonials} />

          <FloatingDock items={links} />
        </div>
      </div>

      {/* Bottom Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-800 via-yellow-500 to-yellow-300 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
    </>
  );
};

export default Start;
