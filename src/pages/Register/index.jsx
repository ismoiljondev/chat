import React, { useState } from "react";
import style from "./style.module.scss";
import avatar from "../../img/avatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
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
          {err && <span>Something went wrong!!!</span>}
          <p>You do have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
