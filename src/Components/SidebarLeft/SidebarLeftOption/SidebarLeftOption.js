import React from "react";
import "./SidebarLeftOption.css";
const SidebarLeftOption = ({ active, title, Icon }) => {
  return (
    <div
      className={`sidebarLeftOption ${active && "sidebarLeftOption--active"}`}
    >
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarLeftOption;
