"use client";

import React, { useState } from "react";
import style from "./page.module.css";

const page = () => {
  const words = ["Hello", "World", "React", "JSX"];
  const [input, setInput] = useState("");
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  console.log(words);

  const handleInput = (event) => {
    const vaule = event.target.value;
    setInput(vaule);

    if (vaule === words[num]) {
      console.log("Niiiiiiiice!");
      setInput("");
      setNum(num + 1);
      setNum2(num2 + 1);
      if (num + 1 >= words.length) {
        setNum(0);
      }
    }
  };

  return (
    <div className={style.container}>
      <div>↓文字を打ちまくれ↓</div>
      <div>{words[num]}</div>
      <input type="text" onChange={handleInput} className={style.input} />
      <div className={style.num2}>{num2}</div>
    </div>
  );
};

export default page;
