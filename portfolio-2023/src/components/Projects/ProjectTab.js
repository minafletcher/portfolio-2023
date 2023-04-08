export default function ProjectTab({ content, tabNum, openTab, setOpenTab }) {
  return (
    <div
      className={
        openTab === tabNum
          ? "bg-red px-3 tab transition-all duration-300 tablet:sub-body mobile:mobile-body"
          : "px-0 tab cursor-pointer transition-all duration-300 tablet:sub-body mobile:mobile-body"
      }
      onClick={() => setOpenTab(tabNum)}
    >
      <div className={openTab === tabNum ? "text-white" : "text-red"}>{content}</div>
    </div>
  );
}
