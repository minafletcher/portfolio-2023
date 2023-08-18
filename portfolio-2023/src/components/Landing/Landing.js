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
      <div className="LANDING-CONTAINER relative flex laptop:flex-row mobile:flex-col justify-center laptop:mt-6 laptop:gap-20">
        <motion.div
          className="LANDING-TEXT laptop:mt-24 tablet:mt-36 mobile:mt-28"
          ref={ref}
          animate={control}
          variants={textVariant}
          initial="hidden"
        >
          <h1 className="LANDING-TITLE text-black laptop:heading1 tablet:tablet-heading1 mobile:mobile-heading1 uppercase">
            {content.landing.name}
          </h1>
          <h2 className="LANDING-SUBTITLE text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
            {content.landing.subtitle}
          </h2>
          <p className="LANDING-BODY text-black mobile:mobile-body tablet:body tablet:max-w-xl laptop:max-w-2xl laptop:body mt-4">
            {content.landing.body}
          </p>
          <button onClick={() => scrollClick("work")}>
            <div className="LANDING-BUTTON w-fit border-2 mt-8 bg-red rounded-md border-white text-white tablet:heading2-5 mobile:mobile-heading3 uppercase py-2 px-10 hover:text-red hover:bg-white hover:border-red transition-all duration-200">
              {content.landing.button}
            </div>
          </button>
        </motion.div>

        <motion.div
          className="LANDING-SHAPES flex mobile:justify-center laptop:justify-end w-full"
          ref={ref}
          animate={control}
          variants={imgVariant}
          initial="hidden"
        >
          <img
            className="LANDING-IMAGE laptop:mt-40 mobile:mt-14 laptop:max-w-lg laptop:w-full tablet:w-8/12 mobile:w-10/12"
            src={content.landing.img}
            alt={content.landing.imgAlt}
          ></img>
        </motion.div>
      </div>
    </div>
  );
}
