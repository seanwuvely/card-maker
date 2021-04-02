import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "a",
      company: "a",
      theme: "dark",
      title: "Software Engineer",
      email: "a@gmail.com",
      message: "a",
      fileName: "a",
      fileURL: null,
    },
    {
      id: "2",
      name: "b",
      company: "b",
      theme: "light",
      title: "Software Engineer",
      email: "b@gmail.com",
      message: "b",
      fileName: "b",
      fileURL: "b.png",
    },
    {
      id: "3",
      name: "c",
      company: "c",
      theme: "colorful",
      title: "c",
      email: "c@gmail.com",
      message: "c",
      fileName: "c",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    console.log(card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
