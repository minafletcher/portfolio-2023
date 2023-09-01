import content from "../../content/content";
import SkillsBlock from "./SkillsBlock";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Skills() {
  // animate in functionality
  // slide up on scroll
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  // animate in functionality
  // slide up on scroll
  const dotsVariant = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.7 } },
    hidden: { opacity: 0, x: -100 },
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
      className="SKILLS-CONTAINER relative flex flex-col laptop:mt-60 mobile:mt-36 tablet:mt-44 laptop:mx-20 tablet:mx-10"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
      <div className="flex flex-row items-end justify-between">
        <div className="SKILLS-HEADER text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
          {content.skills.header}
        </div>
      </div>

      <div className="SKILLS-BLOCKS mt-6 flex flex-col laptop:gap-8 mobile:gap-4">
        {content.skills.skillsBlocks.map((block) => {
          return <SkillsBlock key={block.key} block={block}></SkillsBlock>;
        })}
      </div>

      <motion.div
        className="TALK-DOTS absolute -z-10 flex w-full h-full"
        ref={ref}
        animate={control}
        variants={dotsVariant}
        initial="hidden"
      >
        <img
          className="mobile:w-40 tablet:w-80 laptop:-ml-48 mobile:-ml-20 -mb-96 mt-36"
          src={content.page.dotUrl}
          alt={content.page.dotAlt}
        ></img>
      </motion.div>
    </motion.div>
  );
}
