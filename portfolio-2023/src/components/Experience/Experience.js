import Dropdown from "./Dropdown";
import content from "../../content/content";
import { Link } from "react-router-dom";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Experience() {

  // animate in functionality
  // slide up on scroll
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  // animate in functionality
  // slide up on scroll
  const dotsVariant = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.7 } },
    hidden: { opacity: 0, x: 100 },
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
      id="experience"
      className="flex flex-row items-center laptop:mt-16 mobile:mt-24"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
      <div className="EXPERIENCE-CONTAINER relative flex flex-col laptop:mt-40 mobile:mt-24 laptop:mx-20 tablet:mx-10">
        <motion.div
          className="EXPERIENCE-DOTS absolute -z-10 flex w-full h-full items-end justify-end"
          ref={ref}
          animate={control}
          variants={dotsVariant}
          initial="hidden"
        >
          <img
            className="mobile:w-40 tablet:w-80 tablet:-mr-40 mobile:-mr-20 tablet:-mb-32 mobile:-mb-36"
            src={content.page.dotUrl}
            alt={content.page.dotAlt}
          ></img>
        </motion.div>
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="EXPERIENCE-HEADER text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
            {content.experience.header}
          </div>

          <Link to="/Mina_Fletcher_Resume.pdf" target="_blank">
            <div className="VIEW-RESUME cursor-pointer rounded-md overflow:hidden border-red border px-4 tablet:py-2 mobile:py-1 text-red hover:text-white hover:bg-red transition-all duration-200">
              <div className="mobile:mobile-body tablet:tablet-body">
                {content.experience.downloadText}
              </div>
            </div>
          </Link>
        </div>

        <div className="EXPERIENCE-BLOCKS mt-6 flex flex-col gap-8">
          {content.experience.experienceBlocks.map((block) => {
            return <Dropdown key={block.key} block={block}></Dropdown>;
          })}
        </div>
      </div>
    </motion.div>
  );
}
