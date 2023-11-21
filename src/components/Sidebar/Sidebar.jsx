import React from "react";
import style from "./style.module.scss";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
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
