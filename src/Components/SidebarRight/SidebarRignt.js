import React from "react";
import "./SidebarRignt.css";
import SearchIcon from "@material-ui/icons/Search";
import SidbarRightRow from "./SidbarRightRow/SidbarRightRow";

const users = [
  { name: "	Sheldon Adelson" },
  { name: "		Li Ka-shing" },
  { name: "		Lee Shau Kee" },
  { name: "		Dieter Schwarz" },
  { name: "		James Simons" },
  { name: "		Ding Lei" },
  { name: "	Wang Wei" },
  { name: "		Eric Schmidt" },
];
const SidebarRignt = () => {
  return (
    <div className="sidebarRight">
      <div className="sidebarRight__header">
        <SearchIcon />

        <input type="search" placeholder="Search Twitter" />
      </div>
      <div className="sidebarRight__body">
        {users.map((user, i) => (
          <SidbarRightRow key={i} name={user.name} />
        ))}
      </div>
    </div>
  );
};

export default SidebarRignt;
