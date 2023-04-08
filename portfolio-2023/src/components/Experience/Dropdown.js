import { useState } from "react";
import content from "../../content/content";
import { Link } from "react-router-dom";

export default function Dropdown({ block }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="DROPDOWN-CONTENT flex flex-col drop-shadow-md py-3 px-4 bg-white rounded-lg dropdownHover">
      <div
        className="DROPDOWN-TOP cursor-pointer flex tablet:flex-row tablet:flex-wrap mobile:flex-col tablet:items-center mobile:items-start justify-between pb-1.5 border-b border-grey gap-1"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="JOB-COMPANY flex flex-row flex-wrap pr-4 items-end">
          <div className="text-black laptop:heading3 tablet:mobile-heading3 mobile:mobile-heading4 laptop:pr-2 mobile:pr-1">
            {block.jobTitle}
          </div>
          <div className="text-red font-rubik laptop:text-20 tablet:text-18 mobile:text-14">
            {"@ " + block.company}{" "}
          </div>
        </div>

        <div className="DROPDOWN-TOP-RIGHT flex flex-row flex-wrap gap-6 tablet:pr-10">
          <div className="flex text-black laptop:text-18 tablet:tablet-body mobile:mobile-body font-barlow laptop:gap-3 mobile:gap-2 items-center">
            <div>{block.location}</div>
            <div className="bg-grey w-px laptop:h-5 mobile:h-4 rounded-xl"></div>
            <div>{block.date}</div>
          </div>
        </div>

        <div className="OPEN-CLOSE-ICON absolute flex w-full justify-end pr-8 mobile:pt-7 tablet:pt-0">
          <img
            className="w-5"
            src={
              isActive
                ? content.experience.closeSvg
                : content.experience.openSvg
            }
            alt={
              isActive
                ? content.experience.closeAlt
                : content.experience.openAlt
            }
          ></img>
        </div>
      </div>

      {/* DROPDOWN-CONTENT */}
      <div
        className={
          isActive
            ? "overflow-hidden max-h-96 transition-[max-height] duration-300 ease-in"
            : "overflow-hidden max-h-0 transition-[all]"
        }
      >
        <div className="DROPDOWN-CONTENT pt-4">
          <ul className="list-disc pl-4 marker:text-grey">
            {block.bullets.map((bullet) => {
              return (
                <li
                  key={bullet.key}
                  className="text-black laptop:body tablet:tablet-body mobile:mobile-body"
                >
                  {bullet.text}
                </li>
              );
            })}
          </ul>

          <div className="BLOCK-LINK text-black barlow laptop:text-18 mobile:mobile-body pt-4 pb-1">
            <Link
              className="flex flex-row gap-2 w-min"
              to={block.linkUrl}
              target="_blank"
            >
              {block.linkText}
              <img
                className="mobile:w-4 laptop:w-6"
                src={content.experience.externalLinkSvg}
                alt={content.experience.externalLinkAlt}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
