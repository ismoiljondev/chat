import React from "react";
import style from "./style.module.scss";
import avatar from "../../img/avatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const userName = e.target[0].value;
    const email = e.target[1].value;
    console.log(email);
    const password = e.target[2].value;
    console.log(password);
    // const file = e.target[3].files[0];
    createUserWithEmailAndPassword(auth, email, password)
  };
  return (
    <div className={style.container}>
      <div className={style.container__form}>
        <span className={style.container__form__title}>Chat</span>
        <span>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={avatar} alt="img" width={"50px"} height={"50px"} />
            <span>Add your avatar</span>
          </label>
          <button>Sign in</button>
          <p>You do have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
