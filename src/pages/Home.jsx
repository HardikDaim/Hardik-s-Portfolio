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
import { Helmet } from "react-helmet-async";

const Home = ({ loader }) => {
  const projectsRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Home | My Awesome Site</title>
        <meta
          name="description"
          content="Portfolio of Hardik Daim, a passionate Software Engineer specializing in building and optimizing web applications."
        />
        <meta
          name="keywords"
          content="Hardik Daim, Software Engineer, Full Stack Developer, Web Developer, React, Node.js, Portfolio, Hardik Portfolio, Hardik Daim Portfolio, Hardik"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hardik-daim.vercel.app/" />
        <meta property="og:title" content="Hardik Daim's Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Hardik Daim, a passionate Software Engineer specializing in building and optimizing web applications."
        />
        <meta
          property="og:image"
          content="https://hardik-daim.vercel.app/android-chrome-512x512.png"
        />
        <meta property="twitter:title" content="Hardik Daim's Portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio of Hardik Daim, a passionate Software Engineer specializing in building and optimizing web applications."
        />
        <meta
          property="twitter:image"
          content="https://hardik-daim.vercel.app/android-chrome-512x512.png"
        />
        <meta
          property="twitter:url"
          content="https://hardik-daim.vercel.app/"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Home",
            headline: "Home - Hardik Daim's Portfolio",
            description:
              "Portfolio of Hardik Daim, a passionate Software Engineer specializing in building and optimizing web applications.",
            url: "https://hardik-daim.vercel.app/",
            author: {
              "@type": "Person",
              name: "Hardik Daim",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://hardik-daim.vercel.app/",
            },
          })}
        </script>
      </Helmet>
      <Header loader={loader} />
      <Suspense fallback={<LoadingAnimation />}>
        <Start loader={loader} />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <About loader={loader} projectsRef={projectsRef} />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Skills loader={loader} />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Experience loader={loader} />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Projects loader={loader} ref={projectsRef} />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Testimonial loader={loader} />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Contact loader={loader} />
      </Suspense>
      <Footer loader={loader} />
    </>
  );
};

export default Home;
