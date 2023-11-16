import React from "react";
import style from "./style.module.scss";
import attach from "../../img/attach.png";
const Input = () => {
  return (
    <div className={style.container}>
      <input type="text" placeholder="Type something" />
      <div className={style.container__send}>
        <label htmlFor="img">
          <img src={attach} alt="attach" width={"30px"} height={"30px"} />
        </label>
        <input type="file" name="file" id="img" style={{ display: "none" }} />
        <div>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
