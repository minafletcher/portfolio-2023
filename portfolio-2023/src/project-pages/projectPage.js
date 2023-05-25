import { HashLink as Link } from "react-router-hash-link";
import projectPages from "../content/project-pages";
import Tag from "../components/Tag";
import Footer from "../components/Footer/Footer";
import ReactPlayer from "react-player";
import { useEffect } from "react";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar/Navbar";

export default function ProjectPage({ project }) {
  // animate in functionality
  // slide up on scroll
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div>
      <Navbar isHome={false} />
      <motion.div
        ref={ref}
        animate={control}
        variants={contentVariant}
        initial="hidden"
      >
        <div className="LOGO-CONTAINER flex flex-col laptop:px-20 tablet:px-10 mobile:px-4">
          <Link
            to={`/#work`}
            className="BACK-ARROW pt-8 flex flex-row w-fit gap-2 items-center"
          >
            <img
              className="BACK-ICON w-3"
              src={projectPages.backIcon}
              alt={projectPages.backIconAlt}
            ></img>
            <div className="BACK-TEXT mobile:mobile-body tablet:tablet-body laptop:body">
              {projectPages.backText}
            </div>
          </Link>

          <div
            className={
              project.imgFullWidth
                ? "PROJECT-HEADER flex flex-col tablet:pt-10 mobile:pt-8 tablet:gap-16 mobile:gap-10"
                : "PROJECT-HEADER flex laptop:flex-row mobile:flex-col tablet:pt-10 mobile:pt-8 tablet:gap-16 mobile:gap-10"
            }
          >
            <div className="PROJECT-INFO w-full flex flex-col tablet:gap-6 mobile:gap-4">
              <div className="TITLE-YEAR flex flex-col gap-2">
                <div className="TITLE laptop:heading2 tablet:tablet-heading2 mobile:mobile-heading2 text-black">
                  {project.title}
                </div>
                <div className="YEAR body text-black">{project.year}</div>
              </div>
              <div className="DESCRIPTION laptop:body tablet:tablet-body mobile:mobile-body text-black max-w-lg">
                {project.description}
              </div>
              <div className="TAGS flex flex-row mobile:gap-2 tablet:gap-3">
                {project.tags.map((tag) => {
                  return <Tag key={tag.key} size={1} content={tag.tag} />;
                })}
              </div>
              <div className="TOOLS-CONTAINER flex flex-col gap-2">
                <div className="TOOLS-TEXT small-heading text-black">
                  {projectPages.toolsText}
                </div>
                <div className="TOOLS flex flex-row gap-2">
                  {project.tools.map((tool) => {
                    return (
                      <img
                        className="TOOL-ICON h-7"
                        key={tool.key}
                        src={tool.icon}
                        alt={tool.iconAlt}
                      ></img>
                    );
                  })}
                </div>
              </div>
              {project.buttons ? (
                <div className="BUTTONS flex flex-row flex-wrap gap-4">
                  {project.buttons.map((button) => {
                    return (
                      <Link
                        className="BUTTON-LINK"
                        to={button.buttonLink}
                        target="_blank"
                      >
                        <div className="VIEW-BUTTON flex flex-col items-center w-fit uppercase tablet:heading3 mobile:mobile-heading3 cursor-pointer rounded-md border-red border-2 px-4 tablet:py-2 mobile:py-1 text-red hover:text-white hover:bg-red transition-all duration-200">
                          {button.buttonText}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>

            {project.videoLink ? (
              <div className="VIDEO-PLAYER flex flex-col w-full mobile:h-72 tablet:h-96 drop-shadow-md">
                <ReactPlayer
                  url={project.videoLink}
                  controls={true}
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              </div>
            ) : (
              <div className="COVER-IMAGES flex tablet:flex-row mobile:flex-col w-full drop-shadow-md gap-8">
                {project.coverImages.map((image) => {
                  return (
                    <div className="COVER-IMAGE">
                      <img key={image.key} src={image.img} alt={image.imgAlt} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="PROJECT-BODY flex flex-col">
            {project.content.map((content) => {
              return (
                <div className="BODY-SECTION flex flex-col">
                  <div className="SECTION-TEXT flex tablet:flex-row mobile:flex-col mobile:gap-4 tablet:gap-16 mobile:pt-16 laptop:pt-24">
                    <div
                      className="SECTION-TITLE w-full laptop:heading3 mobile:mobile-heading3"
                      key={content.key}
                    >
                      {content.sectionTitle}
                    </div>
                    <div className="SECTION-PARAGRAPHS flex flex-col w-full mobile:gap-6 tablet:gap-10 laptop:body tablet:tablet-body mobile:mobile-body">
                      {content.paragraphs.map((paragraph) => {
                        return (
                          <div>
                            {paragraph.link ? (
                              <Link
                                className="cursor-pointer text-red underline"
                                to={paragraph.link}
                                target="_blank"
                                key={paragraph.key}
                              >
                                {paragraph.text}
                              </Link>
                            ) : (
                              <div key={paragraph.key}>{paragraph.text}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <img
                    className={
                      content.img
                        ? "SECTION-IMAGE drop-shadow-md mobile:pt-16 laptop:pt-24"
                        : ""
                    }
                    src={content.img}
                    alt={content.imgAlt}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}
