import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList">
        {MenuList.map((item, key) => {
          return <MenuItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
