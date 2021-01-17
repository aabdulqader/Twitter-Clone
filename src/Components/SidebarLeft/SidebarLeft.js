import React from "react";
import "./SidebarLeft.css";
import SidebarLeftOption from "./SidebarLeftOption/SidebarLeftOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../../ContextData/StateProvider";

const options = [
  {
    Icon: HomeOutlinedIcon,
    title: "Home",
    active: true,
  },
  {
    Icon: SearchOutlinedIcon,
    title: "Explore",
  },
  {
    Icon: NotificationsNoneOutlinedIcon,
    title: "Notifications",
  },
  {
    Icon: EmailOutlinedIcon,
    title: "Messages",
  },
  {
    Icon: BookmarkBorderOutlinedIcon,
    title: "Bookmarks",
  },
  {
    Icon: ListAltRoundedIcon,
    title: "Lists",
  },
  {
    Icon: PersonOutlineOutlinedIcon,
    title: "Profile",
  },
  {
    Icon: MoreHorizRoundedIcon,
    title: "More",
  },
];

const SidebarLeft = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebarLeft">
      <div className="sidebarLeft__top">
        <TwitterIcon className="twitterIcon" />
        {options.map(({ active, Icon, title }, i) => (
          <SidebarLeftOption
            key={i}
            active={active}
            title={title}
            Icon={Icon}
          />
        ))}
        <Button>Tweet</Button>
      </div>
      <div className="sidebarLeft__bottom">
        <Avatar src={user.photoURL} />
        <div>
          <h4>{user.displayName}</h4>
          <p>@{user.displayName}</p>
        </div>
        <MoreHorizRoundedIcon />
      </div>
    </div>
  );
};

export default SidebarLeft;
