import Tag from "../Tag";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  imgUrl,
  imgAlt,
  aspectRatio,
  header,
  content,
  tags,
}) {
  return (
    <Link to={`/work/${id}`}>
      <div className="PROJECT-CARD-CONTAINER flex flex-col flex-wrap drop-shadow-md">
        <div className="overflow-hidden rounded-t-lg">
          <img
            className={
              aspectRatio
                ? "aspect-video w-fit object-cover hover:scale-110 transition-all duration-300"
                : "aspect-square w-fit object-cover hover:scale-110 transition-all duration-300"
            }
            src={imgUrl}
            alt={imgAlt}
          ></img>
        </div>
        <div className="py-3 px-4 bg-white rounded-b-lg">
          <div className="HEADER-TAGS flex tablet:flex-row flex-wrap mobile:flex-col gap-1 tablet:items-center">
            <div className="PROJECT-HEADER text-black heading3 pr-2">
              {header}
            </div>
            <div className="TAGS flex flex-row flex-wrap tablet:gap-2 mobile:gap-1">
              {tags.map((tag) => {
                return <Tag key={tag.key} size={1} content={tag.tag} />;
              })}
            </div>
          </div>
          <div className="text-black laptop:sub-body mobile:mobile-body mt-2">
            {content}
          </div>
        </div>
      </div>
    </Link>
  );
}
