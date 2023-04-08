import Navbar from "./components/Navbar/Navbar.js";
import Landing from "./components/Landing/Landing.js";
import Projects from "./components/Projects/Projects.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Experience from "./components/Experience/Experience.js";
import Skills from "./components/Skills/Skills.js";
import TalkToMe from "./components/TalkToMe/TalkToMe.js";
import Footer from "./components/Footer/Footer.js";

// all elements ->
// shapes + animations
// dot grids
export default function Portfolio() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col laptop:px-20 tablet:px-10 mobile:px-4">
        <Landing />
        <Projects />

        <AboutMe />
        <Experience />
        <Skills />
        <TalkToMe />
      </div>

      <Footer />
    </div>
  );
}
