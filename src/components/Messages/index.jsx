import React from "react";
import style from "./style.module.scss";
import user from "../../img/user.png";
const Messages = () => {
  return (
    <div className={`${style.container} ${style.left}`}>
      <div className={style.container__info}>
        <img
          src={user}
          alt="user"
          width={"40px"}
          height={"40px"}
          style={{ borderRadius: "50%" }}
        />
        <span>just now</span>
      </div>
      <div className={style.container__content}>
        <p>Hello</p>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-GYwhiVEuyvQMCWkOvzjgNq8h2TWc7Gycg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
