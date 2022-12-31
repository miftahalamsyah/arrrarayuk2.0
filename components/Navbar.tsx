import type { NextPage } from "next";
import { useState } from "react";
import Moon from "../assets/moon.webp";
import Sun from "../assets/sun.webp";

interface INavbarProps {
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

export const Navbar: NextPage<INavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line line1"}></div>
          <div className={showSidebar ? "line line-2" : "line line2"}></div>
          <div className={showSidebar ? "line line-3" : "line line3"}></div>
        </div>
        <p className="navbar_name">
          <span>arrarayuk 2.0</span>
        </p>
        <div className="navbar_list">
          <p className="navbar_list_item" onClick={() => onNavItemClick("about")}>
            About
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("jobs")}>
            Indikator
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("projects")}>
            Materi
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("skills")}>
            Games
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("contact")}>
            Evaluasi
          </p>
          <p className="navbar_list_img">
            <img src={theme === "light" ? Sun.src : Moon.src} alt="" onClick={switchTheme} />
          </p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick("about")}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("jobs")}>
          Indikator
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("projects")}>
          Materi
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("skills")}>
          Games
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("contact")}>
          Evaluasi
        </p>
        <p className="sidebar_img">
          <img src={theme === "light" ? Sun.src : Moon.src} alt="" onClick={switchTheme} />
        </p>
      </div>
    </>
  );
};
