import { useState, useEffect } from "react";
import ProjectTab from "./ProjectTab";
import ProjectCard from "./ProjectCard";

// ---- Content ---- //
import content from "../../content/content";
import { webDevelopment, animation, design } from "../../content/content";

// animation functionality
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectTabs() {
  const [openTab, setOpenTab] = useState(1);

  // animate in functionality
  // slide up on scroll
  const contentVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  // animate in functionality
  // slide up on scroll
  const dotsVariant = {
    visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.7 } },
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
      id="work"
      className="PROJECT-ANCHOR laptop:mt-16 mobile:mt-4"
      ref={ref}
      animate={control}
      variants={contentVariant}
      initial="hidden"
    >
        <div className="PROJECT-CONTAINER relative flex flex-col justify-between laptop:mt-40 mobile:mt-44 laptop:mx-20 tablet:mx-10">
          <motion.div
            className="PROJECT-DOTS absolute -z-10 tablet:flex w-full justify-end mobile:hidden"
            ref={ref}
            animate={control}
            variants={dotsVariant}
            initial="hidden"
          >
            <img
              className="w-80 -mr-48 mt-4"
              src={content.page.dotUrl}
              alt={content.page.dotAlt}
            ></img>
          </motion.div>

          <div className="PROJECT-CONTENT">
            <h2 className="PROJECTS-HEADER text-black laptop:heading2 tablet:tablet-heading2 mobile:heading3">
              {content.projects.title}
            </h2>

            <div className="PROJECT-TABS flex flex-row tablet:gap-4 mobile:gap-2 mt-5 items-center mobile:justify-center laptop:justify-start">
              <ProjectTab
                content={content.projects.tabWeb}
                tabNum={1}
                openTab={openTab}
                setOpenTab={setOpenTab}
              />
              <div className="text-red bg-red tabLine"></div>
              <ProjectTab
                content={content.projects.tabAnim}
                tabNum={2}
                openTab={openTab}
                setOpenTab={setOpenTab}
              />
              <div className="text-red bg-red tabLine"></div>
              <ProjectTab
                content={content.projects.tabDes}
                tabNum={3}
                openTab={openTab}
                setOpenTab={setOpenTab}
              />
            </div>

            <div className="PROJECTS-GRID flex mt-8">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="project-grid">
                  {webDevelopment.map((webDev) => {
                    return (
                      <ProjectCard
                        key={webDev.key}
                        imgUrl={webDev.imgUrl}
                        imgAlt={webDev.imgAlt}
                        linkUrl={webDev.linkUrl}
                        aspectRatio={true}
                        header={webDev.title}
                        content={webDev.description}
                        tags={webDev.tags}
                      ></ProjectCard>
                    );
                  })}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <div className="project-grid">
                  {animation.map((animation) => {
                    return (
                      <ProjectCard
                        key={animation.key}
                        imgUrl={animation.imgUrl}
                        imgAlt={animation.imgAlt}
                        linkUrl={animation.linkUrl}
                        aspectRatio={true}
                        header={animation.title}
                        content={animation.description}
                        tags={animation.tags}
                      ></ProjectCard>
                    );
                  })}
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <div className="project-grid">
                  {design.map((design) => {
                    return (
                      <ProjectCard
                        key={design.key}
                        imgUrl={design.imgUrl}
                        imgAlt={design.imgAlt}
                        linkUrl={design.linkUrl}
                        aspectRatio={false}
                        header={design.title}
                        content={design.description}
                        tags={design.tags}
                      ></ProjectCard>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  );
}
