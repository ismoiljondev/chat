import React from "react";
import style from "./style.module.scss";
const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.container__form}>
        <span className={style.container__form__title}>Chat</span>
        <span>Login</span>
        <form action="">
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          <p>You don't have an account? Register</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
