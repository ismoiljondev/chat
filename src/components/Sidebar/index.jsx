import React from "react";
import style from "./style.module.scss";
import Navbar from "../Navbar";
import Search from "../Search";
import Chats from "../Chats";
const Sidebar = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
