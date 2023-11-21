import { useContext } from "react";
import style from "./style.module.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={style.container}>
      <h3>Chat</h3>
      <div className={style.container__user}>
        <p>{currentUser.displayName}</p>
        <div className={style.container__user__img}>
          <img src={currentUser.photoURL} alt="" />
          <button onClick={() => signOut(auth)}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
