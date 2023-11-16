import React from "react";
import style from "./style.module.scss";
import Message from "../Message";
import Input from "../Input";
const Chat = () => {
  return (
    <div className={style.container}>
      <div className={style.container__nav}>
        <h2>User</h2>
        <div className={style.container__nav__icons}>
          <p>&#9990;</p>
          <p>&#9786;</p>
          <p>&#9776;</p>
        </div>
      </div>
      <Message />
      <Input />
    </div>
  );
};

export default Chat;
