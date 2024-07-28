// Home.jsx
import React, { useRef } from "react";
import Start from "../components/Start";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = ({ loader }) => {
  const projectsRef = useRef(null);

  return (
    <>
      <Header loader={loader} />
      <Start loader={loader} />
      <About loader={loader} projectsRef={projectsRef} />
      <Skills loader={loader} />
      <Experience loader={loader} />
      <Projects loader={loader} ref={projectsRef} />
      <Contact loader={loader} />
      <Footer loader={loader} />
    </>
  );
};

export default Home;
