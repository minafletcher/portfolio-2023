import content from "../../content/content";
import Tag from "../Tag.js";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function TalkToMe() {
  // animate in functionality
  // slide up on scroll
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
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
      className="TALKTOME-CONTAINER relative flex flex-col laptop:mt-60 mobile:mt-44 laptop:mx-20 tablet:mx-10"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
      <div className="TALKTOME-HEADER text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
        {content.talkToMe.header}
      </div>

      <div className="TAGS-SECTION flex flex-row flex-wrap laptop:gap-4 mobile:gap-2.5 mt-6">
        {content.talkToMe.tags.map((tag) => {
          return <Tag key={tag.key} size={3} content={tag.text} />;
        })}
      </div>
    </motion.div>
  );
}
