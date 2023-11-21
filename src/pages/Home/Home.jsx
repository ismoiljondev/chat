import React from "react";
import style from "./style.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
