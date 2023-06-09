import content from "../../content/content";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Landing() {

  function scrollClick(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // animate in functionality
  // slide up on scroll
  const textVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  const imgVariant = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, x: -50 },
  };

  const scrollVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, y: -50 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div id="landing" className="LANDING-ANCHOR -mt-16">
      <div className="LANDING-CONTAINER relative flex laptop:flex-row-reverse mobile:flex-col justify-center laptop:mt-6">
        <motion.div
          className="LANDING-TEXT tablet:mt-40 mobile:mt-32 mx-4"
          ref={ref}
          animate={control}
          variants={textVariant}
          initial="hidden"
        >
          <h1 className="LANDING-TITLE text-black laptop:heading1 tablet:tablet-heading1 mobile:mobile-heading1 uppercase pr-8">
            {content.landing.name}
          </h1>
          <h2 className="LANDING-SUBTITLE text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
            {content.landing.subtitle}
          </h2>
        </motion.div>

        <motion.div
          className="LANDING-SHAPES flex justify-center mobile:w-full laptop:w-fit"
          ref={ref}
          animate={control}
          variants={imgVariant}
          initial="hidden"
        >
          <img
            className="LANDING-IMAGE laptop:mt-40 mobile:mt-14 laptop:w-96 tablet:w-6/12 mobile:w-8/12"
            src={content.landing.img}
            alt={content.landing.imgAlt}
          ></img>
        </motion.div>

        <button onClick={() => scrollClick("work")}>
          <motion.img
            className="SCROLL-ARROW absolute shrink-0 custom-bounce tablet:w-8 mobile:w-6 right-0 laptop:bottom-4 mobile:-bottom-16"
            src={content.landing.arrowImg}
            alt={content.landing.arrowAlt}
            ref={ref}
            animate={control}
            variants={scrollVariant}
            initial="hidden"
          ></motion.img>
        </button>
      </div>
    </div>
  );
}
