import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatContext } from "../../context/ChatsContext";
const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    console.log(u);
  };

  const obj = Object.entries(chats);
  return (
    <div className={style.container}>
      {obj
        .sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className={style.container__user}
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <div className={style.container__user__img}>
              <img src={chat[1].userInfo.photoURL} alt="user" />
            </div>
            <div className={style.container__user__text}>
              <h3>{chat[1].userInfo.displayName}</h3>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
