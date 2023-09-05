import content from "../../content/content";
import { Link } from "react-router-dom";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Footer() {
  // animate in functionality
  // slide down on page load
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0.5 } },
    hidden: { opacity: 0, y: 35 },
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
      id="contact"
      className="FOOTER-CONTAINER relative flex flex-col gap-20 laptop:mt-48 mobile:mt-32 bg-red laptop:px-20 tablet:px-10 mobile:px-4 py-8"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
      <div className="FOOTER-TOP flex flex-col gap-4">
        <div className="FOOTER-TITLE text-white laptop:heading2 tablet:tablet-heading2 mobile:heading2-5">
          {content.footer.title}
        </div>
        <Link to={content.aboutMe.links[3].linkUrl} className="w-fit">
          <div className="FOOTER-BUTTON w-fit border-2 rounded-md border-white text-white tablet:heading2-5 mobile:mobile-heading3 uppercase py-2 px-10 hover:text-red hover:bg-white transition-all duration-200">
            {content.footer.button}
          </div>
        </Link>

        <div className="FOOTER-EMAIL text-white tablet:heading2-5 mobile:mobile-heading3">
          {content.footer.email}
        </div>
        <div className="FOOTER-LINKS flex flex-row laptop:gap-3 mobile:gap-0">
          {content.aboutMe.links.map((link) => {
            return (
              <Link key={link.key} to={link.linkUrl} target="_blank">
                <img
                  className="py-2 mobile:px-2 laptop:px-0 hover:scale-110 transition-all duration-200"
                  key={link.key}
                  src={link.img}
                  alt={link.imgAlt}
                ></img>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="FOOTER-BOTTOM text-white laptop:body tablet:tablet-body mobile:mobile-body">
        {content.footer.designedBy}
      </div>
    </motion.div>
  );
}
