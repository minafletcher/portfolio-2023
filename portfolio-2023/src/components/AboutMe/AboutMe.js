import content from "../../content/content";
import { Link } from "react-router-dom";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AboutMe() {
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
      id="about"
      className="flex flex-row items-center laptop:mt-16"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
      <div className="ABOUT-ME-CONTAINER relative flex laptop:flex-row mobile:flex-col laptop:mt-40 mobile:mt-44 items-center desktop:mx-20 tablet:mx-10">
        <motion.div
          className="PROJECT-DOTS absolute -z-10 flex w-full"
          ref={ref}
          animate={control}
          variants={dotsVariant}
          initial="hidden"
        >
          <img
            className="mobile:w-40 tablet:w-80 laptop:-ml-40 laptop:-mt-80"
            src={content.page.dotUrl}
            alt={content.page.dotAlt}
          ></img>
        </motion.div>

        <div className="ABOUT-ME-HEADER-MOBILE flex w-full justify-end mb-14 text-black laptop:hidden mobile:heading3 tablet:tablet-heading2">
          {content.aboutMe.header}
        </div>

        <div className="HEADSHOT-TEXT-CONTAINER flex laptop:flex-row mobile:flex-col mobile:items-center laptop:items-center">
          <img
            className="ABOUT-ME-HEADSHOT shrink-0 laptop:w-2/5 tablet:w-5/12 mobile:w-8/12 aspect-square max-w-md"
            src={content.aboutMe.imgUrl}
            alt={content.aboutMe.imgAlt}
          ></img>

          <div className="ABOUT-ME-TEXT flex flex-col laptop:pl-10 laptop:mr-10 mobile:pb-8">
            <div className="ABOUT-ME-HEADER-LAPTOP text-black laptop:block laptop:heading2 mobile:hidden">
              {content.aboutMe.header}
            </div>
            <div className="ABOUT-ME-BIO text-black laptop:body tablet:tablet-body mobile:mobile-body">
              <div className="pt-4">{content.aboutMe.line1}</div>
              <div className="pt-4">{content.aboutMe.line2}</div>
              <div className="pt-4">{content.aboutMe.line3}</div>
            </div>
          </div>
        </div>

        <div className="ABOUT-ME-LINKS flex laptop:flex-col mobile:flex-row justify-center bg-red rounded-full h-min p-4">
          {content.aboutMe.links.map((link) => {
            return (
              <Link key={link.key} to={link.linkUrl} target="_blank">
                <img
                  className="hover:scale-110 transition-all duration-200 laptop:py-2 mobile:px-2 laptop:px-0 mobile:w-12 laptop:w-32 desktop:w-28"
                  src={link.img}
                  alt={link.imgAlt}
                ></img>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
