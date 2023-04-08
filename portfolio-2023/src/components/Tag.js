export default function Tag({ content, size }) {
  var tagStyle = "";

  if (size === 1) {
    tagStyle = "text-14 py-0.5 laptop:px-3 mobile:px-2";
  }

  if (size === 2) {
    tagStyle = "tablet:text-16 mobile:text-14 py-0.5 px-3";
  }

  if (size === 3) {
    tagStyle =
      "laptop:text-18 tablet:text-16 mobile:text-14 laptop:py-1.5 laptop:px-8 mobile:py-1 mobile:px-4";
  }

  return (
    <div
      className={
        size === 3
          ? "TAG hover:scale-105 transition-all duration-200 flex font-barlow text-red border-red rounded-full border bg-white items-center"
          : "TAG flex font-barlow text-red border-red rounded-full border bg-white items-center"
      }
    >
      <div className={tagStyle}>{content}</div>
    </div>
  );
}
