// record music
//import {ReactComponent as RecordIcon} from '../../content/img/record-icon.svg';
//import Sound from 'react-sound';

import HamburgerMenu from "./HamburgerMenu";
import content from "../../content/content";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Navbar({isHome}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  //const [isRecordOn, setIsRecordOn] = useState(false);

  // animate in functionality
  // slide down on page load
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0 } },
    hidden: { opacity: 0, y: -35 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  function scrollClick(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="sticky top-0 z-10"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
      <div className="NAVBAR-CONTAINER bg-white opacity-90">
        <div className="laptop:hidden mobile:block">
          <HamburgerMenu
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            scrollClick={scrollClick}
            isHome={isHome}
          />
        </div>

        <div className="mobile:hidden laptop:flex justify-between flex-row border-grey border-b mx-20 py-3.5 items-center">
          <div className="flex flex-row w-full justify-between">
            <div className="NAVBAR-LANDING text-2xl text-black font-medium font-rubik hover:text-red transition-all duration-200">
              {isHome ? (
                <button onClick={() => scrollClick("landing")}>
                  {content.navbar.home}
                </button>
              ) : (
                <Link to={`/#landing`}>{content.navbar.home}</Link>
              )}
            </div>

            <div className="flex flex-row gap-6 items-center text-base text-black font-barlow">
              <div className="NAVBAR-WORK hover:text-red transition-all duration-200">
                {isHome ? (
                  <button onClick={() => scrollClick("work")}>
                    {content.navbar.work}
                  </button>
                ) : (
                  <Link to={`/#work`}>{content.navbar.work}</Link>
                )}
              </div>

              <div className="NAVBAR-ABOUT hover:text-red transition-all duration-200">
                {isHome ? (
                  <button onClick={() => scrollClick("about")}>
                    {content.navbar.about}
                  </button>
                ) : (
                  <Link to={`/#about`}>{content.navbar.about}</Link>
                )}
              </div>

              <div className="NAVBAR-EXPERIENCE hover:text-red transition-all duration-200">
                {isHome ? (
                  <button onClick={() => scrollClick("experience")}>
                    {content.navbar.experience}
                  </button>
                ) : (
                  <Link to={`/#experience`}>{content.navbar.experience}</Link>
                )}
              </div>

<div className="NAVBAR-CONTACT hover:text-red transition-all duration-200">
              {isHome ? (
                <button
                  onClick={() => scrollClick("contact")}
                >
                  {content.navbar.contact}
                </button>
              ) : (
                <Link
                  to={`/#contact`}
                >
                  {content.navbar.contact}
                </Link>
              )}</div>
            </div>
          </div>

          {/* RECORD PLAY CODE
            
            <div
              className={
                isRecordOn ? "RECORD-CONTAINER custom-spin" : "RECORD-CONTAINER"
              }
              onClick={() => setIsRecordOn((prev) => !prev)}
            >
              <RecordIcon className="w-6.5 h-6.5 fill-black hover:fill-red transition-all duration-200 cursor-pointer" />
              <Sound />
            </div> */}
        </div>
      </div>
    </motion.div>
  );
}
