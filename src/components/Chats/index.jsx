import React from "react";
import style from "./style.module.scss";
import user from "../../img/user.png";
const Chats = () => {
  return (
    <div className={style.container}>
      <div className={style.container__user}>
        <div className={style.container__user__img}>
          <img src={user} alt="user" />
        </div>
        <div className={style.container__user__text}>
          <h3>User Name</h3>
          <p>Hello Lorem</p>
        </div>
      </div>
      <div className={style.container__user}>
        <div className={style.container__user__img}>
          <img src={user} alt="user" />
        </div>
        <div className={style.container__user__text}>
          <h3>User Name</h3>
          <p>Hello Lorem</p>
        </div>
      </div>
      <div className={style.container__user}>
        <div className={style.container__user__img}>
          <img src={user} alt="user" />
        </div>
        <div className={style.container__user__text}>
          <h3>User Name</h3>
          <p>Hello Lorem</p>
        </div>
      </div>
      <div className={style.container__user}>
        <div className={style.container__user__img}>
          <img src={user} alt="user" />
        </div>
        <div className={style.container__user__text}>
          <h3>User Name</h3>
          <p>Hello Lorem</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
