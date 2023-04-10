import RecordIcon from "../../img/record-icon.svg";
import { HashLink } from "react-router-hash-link";
import content from "../../content/content";

export default function HamburgerMenu({ isNavOpen, setIsNavOpen }) {
  return (
    <div className="HAMBURGER-CONTAINER flex flex-row justify-between border-b-2 tablet:px-10 mobile:px-4 py-4">
      <HashLink
        className="text-2xl text-black font-medium font-rubik"
        smooth
        to="/#landing"
      >
        {content.navbar.home}
      </HashLink>
      <div className="flex items-center">
        <img className="h-6.5 w-6.5 pr-12" src={RecordIcon} alt="Record icon" />

        <div
          className="HAMBURGER-ICON tablet:right-10 mobile:right-4"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className="hamburger-line burger1" />
          <div className="hamburger-line burger2" />
          <div className="hamburger-line burger3" />
        </div>

        <div className="showMenuNav">
          <ul className="MENU-LINKS flex flex-col gap-8 items-end justify-between min-h-[250px] tablet:mr-4 mobile:mr-0 uppercase text-48 text-black font-medium font-rubik">
            <li className="hover:italic">
              <HashLink
                onClick={() => setIsNavOpen((prev) => !prev)}
                smooth
                to="/#work"
              >
                {content.navbar.work}
              </HashLink>
            </li>
            <li className="hover:italic">
              <HashLink
                onClick={() => setIsNavOpen((prev) => !prev)}
                smooth
                to="/#about"
              >
                {content.navbar.about}
              </HashLink>
            </li>
            <li className="hover:italic">
              <HashLink
                onClick={() => setIsNavOpen((prev) => !prev)}
                smooth
                to="/#experience"
              >
                {content.navbar.experience}
              </HashLink>
            </li>
            <li className="hover:italic">
              <HashLink
                onClick={() => setIsNavOpen((prev) => !prev)}
                smooth
                to="/#contact"
              >
                {content.navbar.contact}
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      <style>{`

        .burger1 {
            transform: ${isNavOpen ? "rotate(45deg)" : "rotate(0)"};
        }

        .burger2 {
            opacity: ${isNavOpen ? "0" : "1"};
            transform: ${isNavOpen ? "translateX(20px)" : "translateX(0)"};
        }

        .burger3 {
            transform: ${isNavOpen ? "rotate(-45deg)" : "rotate(0)"};
        }

        .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: #FFFDF6;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            padding-top: 6rem;
            padding-right: 2rem;
            transform: ${isNavOpen ? "translateX(0)" : "translateX(100%)"};
            transition: transform 0.3s ease-in-out;
        }
        `}</style>
    </div>
  );
}