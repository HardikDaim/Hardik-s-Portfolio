import React from "react";
import Start from "../components/Start";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = ({loader}) => {
  return (
    <>
      <Header loader={loader} />
      <Start loader={loader} />
      <About loader={loader} />
      <Skills loader={loader} />
      <Experience loader={loader} />
      <Projects loader={loader} />
      <Contact loader={loader} />
     <Footer loader={loader} />
    </>
  );
};

export default Home;
