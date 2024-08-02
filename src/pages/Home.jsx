// Home.jsx
import React, { useRef, lazy, Suspense } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
const Start = lazy(() => import("../components/Start"));
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));
const Testimonial = lazy(() => import("../components/Testimonial"));

const Home = ({ loader }) => {
  const projectsRef = useRef(null);

  return (
    <>
      <Suspense fallback={<LoadingAnimation />}>
        <Header loader={loader} />
        <Start loader={loader} />
        <About loader={loader} projectsRef={projectsRef} />
        <Skills loader={loader} />
        <Experience loader={loader} />
        <Projects loader={loader} ref={projectsRef} />
        <Testimonial loader={loader} />
        <Contact loader={loader} />
        <Footer loader={loader} />
      </Suspense>
    </>
  );
};

export default Home;
