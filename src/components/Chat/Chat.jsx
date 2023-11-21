import React, { useContext } from "react";
import style from "./style.module.scss";
import Message from "../Message/Message";
import Input from "../Input/Input";
import { ChatContext } from "../../context/ChatsContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  return (
    <div className={style.container}>
      <div className={style.container__nav}>
        <h2>{data.user?.displayName}</h2>
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
