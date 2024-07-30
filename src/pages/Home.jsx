// Home.jsx
import React, { useRef, lazy, Suspense } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import { Helmet } from "react-helmet-async";
const Start = lazy(() => import("../components/Start"));
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));

const Home = ({ loader }) => {
  const projectsRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Home | My Awesome Site</title>
        <meta name="description" content="Portfolio of Hardik Daim, a passionate Software Engineer specializing in building and optimizing web applications." />
        <meta name="keywords" content="Hardik Daim, Software Engineer, Full Stack Developer, Web Developer, React, Node.js, Portfolio" />
        <meta property="og:title" content="Hardik Daim's Portfolio" />
        <meta property="og:description" content="Portfolio of Hardik Daim, a passionate Software Engineer specializing in building and optimizing web applications." />
        <meta property="og:image" content="https://hardik-daim.vercel.app/android-chrome-512x512.png" />
        <meta property="og:url" content="https://hardik-daim.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Suspense fallback={<LoadingAnimation />}>
        <Header loader={loader} />
        <Start loader={loader} />
        <About loader={loader} projectsRef={projectsRef} />
        <Skills loader={loader} />
        <Experience loader={loader} />
        <Projects loader={loader} ref={projectsRef} />
        <Contact loader={loader} />
        <Footer loader={loader} />
      </Suspense>
    </>
  );
};

export default Home;
