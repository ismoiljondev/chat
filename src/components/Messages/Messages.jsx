import React, { useContext, useEffect, useRef } from "react";
import style from "./style.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatsContext";
const Messages = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  
  return (
    <div className={`${style.container} ${style.left}`} ref={ref}>
      <div className={style.container__info}>
        <img
          src={
            message.sendId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="user"
          width={"40px"}
          height={"40px"}
          style={{ borderRadius: "50%" }}
        />
        <span>just now</span>
      </div>
      <div className={style.container__content}>
        <p>{message.text}</p>
        {message.img && (
          <div>
            <img src={message.img} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
