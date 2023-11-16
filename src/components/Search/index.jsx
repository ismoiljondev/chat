import React from "react";
import style from "./style.module.scss";
import user from "../../img/user.png";
const Search = () => {
  return (
    <div className={style.container}>
      <div className={style.container__form}>
        <input type="text" placeholder="Find User" />
      </div>
      <div className={style.container__user}>
        <div className={style.container__user__img}>
          <img src={user} alt="user" />
        </div>
        <p>User Name</p>
      </div>
    </div>
  );
};

export default Search;
