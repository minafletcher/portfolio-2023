import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Portfolio from "./Portfolio.js";
import "./style.css";
import Navbar from "./components/Navbar/Navbar.js";

// helper components
import ScrollToTop from "./helpers/scrollToTop.js";
import ScrollToHashElement from "./helpers/scrollToHashElement.js";

import {
  GlobalEnergy,
  NYUnderground,
  MakeSwitch,
  LogoBook,
  ClaymationMusic,
  PersonalLogo,
  PrincessSack,
  SpaceJunk,
  GhostTalent,
  Slanted,
  CleanKick,
  Benvenuti,
  TheraPro,
  CGP,
  Interventions,
  GoGarden,
} from "./project-pages/projectPages.js";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />

      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />}></Route>
        {/* Web Development Project Routes */}
        <Route path="work/gogarden" element={<GoGarden />} />
        <Route path="work/interventions-amplify" element={<Interventions />} />
        <Route path="work/coolgreenpower" element={<CGP />} />
        <Route path="work/therapro" element={<TheraPro />} />
        <Route path="work/benvenuti" element={<Benvenuti />} />
        <Route path="work/clean-kick" element={<CleanKick />} />
        {/* Animation Project Routes */}
        <Route path="work/slanted" element={<Slanted />} />
        <Route path="work/ghost-talent-show" element={<GhostTalent />} />
        <Route path="work/space-junk" element={<SpaceJunk />} />
        <Route path="work/princess-floursack" element={<PrincessSack />} />
        <Route path="work/personal-logo" element={<PersonalLogo />} />
        <Route
          path="work/claymation-music-video"
          element={<ClaymationMusic />}
        />
        {/* Design Project Routes */}
        <Route path="work/make-the-switch" element={<MakeSwitch />} />
        <Route path="work/new-york-underground" element={<NYUnderground />} />
        <Route path="work/global-energy-usage" element={<GlobalEnergy />} />
        <Route path="work/24-logos-and-typefaces" element={<LogoBook />} />
        <Route path="*" element={<Link to="/" replace />} />
      </Routes>
    </Router>
  </>
);
