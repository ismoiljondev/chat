import React, { useState } from "react";
import style from "./style.module.scss";
import avatar from "../../img/avatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
   const [err, setErr] = useState(false);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
     setLoading(true);
     e.preventDefault();
     const displayName = e.target[0].value;
     const email = e.target[1].value;
     const password = e.target[2].value;
     const file = e.target[3].files[0];

     try {
       //Create user
       const res = await createUserWithEmailAndPassword(auth, email, password);

       //Create a unique image name
       const date = new Date().getTime();
       const storageRef = ref(storage, `${displayName + date}`);

       await uploadBytesResumable(storageRef, file).then(() => {
         getDownloadURL(storageRef).then(async (downloadURL) => {
           try {
             //Update profile
             await updateProfile(res.user, {
               displayName,
               photoURL: downloadURL,
             });
             //create user on firestore
             await setDoc(doc(db, "users", res.user.uid), {
               uid: res.user.uid,
               displayName,
               email,
               photoURL: downloadURL,
             });

             //create empty user chats on firestore
             await setDoc(doc(db, "userChats", res.user.uid), {});
             navigate("/");
           } catch (err) {
             console.log(err);
             setErr(true);
             setLoading(false);
           }
         });
       });
     } catch (err) {
       setErr(true);
       setLoading(false);
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
          <button disabled={loading}>Sign in</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong!!!</span>}
          <p>
            You do have an account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
