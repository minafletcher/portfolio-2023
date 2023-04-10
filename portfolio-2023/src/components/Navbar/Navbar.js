import RecordIcon from "../../img/record-icon.svg";
import HamburgerMenu from "./HamburgerMenu";
import content from "../../content/content";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // animate in functionality
  // slide down on page load
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
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
          <div className="flex flex-row w-full justify-between pr-12">
            <HashLink
              className="text-2xl text-black font-medium font-rubik"
              smooth
              to="/#landing"
            >
              {content.navbar.home}
            </HashLink>
            <div className="flex flex-row gap-6 items-center text-base text-black font-barlow">
              <HashLink
                className="hover:text-red transition-all duration-200"
                smooth
                to="/#work"
              >
                {content.navbar.work}
              </HashLink>
              <HashLink
                className="hover:text-red transition-all duration-200"
                smooth
                to="/#about"
              >
                {content.navbar.about}
              </HashLink>
              <HashLink
                className="hover:text-red transition-all duration-200"
                smooth
                to="/#experience"
              >
                {content.navbar.experience}
              </HashLink>
              <HashLink
                className="hover:text-red transition-all duration-200"
                smooth
                to="/#contact"
              >
                {content.navbar.contact}
              </HashLink>
            </div>
          </div>

          <img className="h-6.5 w-6.5" src={RecordIcon} alt="Record icon" />
        </div>
      </div>
    </motion.div>
  );
}