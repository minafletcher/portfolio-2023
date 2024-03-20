import Tag from "../Tag";

export default function SkillsBlock({ block }) {
  return (
    <div className="SKILLS-CONTENT flex laptop:flex-row mobile:flex-col drop-shadow-md py-3 px-4 bg-white rounded-lg">
      <div className="SKILLS-HEADER flex mobile:h-8 laptop:h-full laptop:basis-1/4">
        <div className="SKILLS-TAGS flex mobile:flex-row laptop:flex-col gap-2 items-start">
          {block.titles.map((title) => {
            return <Tag size={2} content={title.title} />;
          })}
        </div>
      </div>

      <div className="SKILLS-ITEMS flex flex-row laptop:basis-3/4 py-3 px-4 flex-wrap laptop:gap-6 mobile:gap-4 items-center justify-center">
        {block.items.map((item) => {
          return (
            <div
              key={item.key}
              className="SKILLS-ITEM flex flex-row gap-1.5 items-center hover:scale-105 transition-all duration-200"
            >
              <div className="SKILLS-TEXT text-black laptop:body tablet:tablet-body mobile:mobile-body">
                {item.text}
              </div>
              <img
                className="SKILLS-ICON tablet:h-7 mobile:h-6 fill-black"
                src={item.imgUrl}
                alt={item.imgAlt}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
