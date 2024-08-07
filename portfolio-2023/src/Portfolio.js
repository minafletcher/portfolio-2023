import Landing from "./components/Landing/Landing.js";
import Navbar from "./components/Navbar/Navbar.js";
import Projects from "./components/Projects/Projects.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Experience from "./components/Experience/Experience.js";
import Skills from "./components/Skills/Skills.js";
import TalkToMe from "./components/TalkToMe/TalkToMe.js";
import Footer from "./components/Footer/Footer.js";
import { Outlet } from "react-router-dom";

import React, { useEffect } from "react";

// all elements ->
// shapes + animations
// dot grids
export default function Portfolio() {

  const saveScrollPosition = () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  };

  const loadScrollPosition = () => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  };

  useEffect(() => {
    loadScrollPosition();

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  return (
    <div>
      <Navbar isHome={true} />
      <div className="flex flex-col laptop:px-20 tablet:px-10 mobile:px-4">
        <Landing />
        <Projects />

        <AboutMe />
        <Experience />
        <Skills />
        <TalkToMe />
      </div>

      <Footer />
      <Outlet />
    </div>
  );
}
