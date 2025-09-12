import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Gallery from "../components/Gallery";


const Home = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="Gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
