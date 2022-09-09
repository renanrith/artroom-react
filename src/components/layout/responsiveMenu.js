import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import classes from "./responsiveMenu.module.css";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

export default function ResponsiveMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className={classes.menu}>
          <Link to="#" className={classes.menuBars}>
            <AiOutlineMenu onClick={showSidebar} size={30} color="white" />
          </Link>
        </div>
        <div className={sidebar ? classes.navMenuActive : classes.navMenu}>
          <ul className={classes.navMenuItens} onClick={showSidebar}>
            <li className={classes.navbarToggle}>
              <Link to="#" className={classes.menuBars}>
                <AiOutlineClose onClick={showSidebar} size={30} color="white" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={classes.navText}>
                  <Link to={item.path}>
                    {item.icon}
                    <span> {item.title} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}
