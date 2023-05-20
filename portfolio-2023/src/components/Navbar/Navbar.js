// record music
//import {ReactComponent as RecordIcon} from '../../content/img/record-icon.svg';
//import Sound from 'react-sound';

import HamburgerMenu from "./HamburgerMenu";
import content from "../../content/content";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  //const [isRecordOn, setIsRecordOn] = useState(false);

  // animate in functionality
  // slide down on page load
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, y: -35 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

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
          <HamburgerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>

        <div className="mobile:hidden laptop:flex justify-between flex-row border-grey border-b mx-20 py-3.5 items-center">
          <div className="flex flex-row w-full justify-between">
            <Link
              className="text-2xl text-black font-medium font-rubik hover:text-red transition-all duration-200"
              to="/#landing"
            >
              {content.navbar.home}
            </Link>
            <div className="flex flex-row gap-6 items-center text-base text-black font-barlow">
              <Link
                className="hover:text-red transition-all duration-200"
                to="/#work"
              >
                {content.navbar.work}
              </Link>
              <Link
                className="hover:text-red transition-all duration-200"
                to="/#about"
              >
                {content.navbar.about}
              </Link>
              <Link
                className="hover:text-red transition-all duration-200"
                to="/#experience"
              >
                {content.navbar.experience}
              </Link>
              <Link
                className="hover:text-red transition-all duration-200"
                to="/#contact"
              >
                {content.navbar.contact}
              </Link>
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
