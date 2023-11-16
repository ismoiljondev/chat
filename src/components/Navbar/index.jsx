import React from "react";
import style from "./style.module.scss";
const Navbar = () => {
  return (
    <div className={style.container}>
      <h3>Chat</h3>
      <div className={style.container__user}>
        <p>User Name</p>
        <div>
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
