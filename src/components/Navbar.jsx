import React from "react";
import MenuList from "./MenuList";
import "../css/navbar.css";

function Navbar() {
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <a href={url}>{title}</a>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">
        RD<font>Coder</font>
      </div>
      <ul classNme="menu-list">{menuList}</ul>
    </nav>
  );
}

export default Navbar;
