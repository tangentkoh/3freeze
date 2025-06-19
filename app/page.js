"use client";

import React, { useState } from 'react';
import style from './page.module.css';

const page = () => {
  const [count, setCount] = useState(0);
  const doubleNumber = count * 2;
  const MAX_NUMBER = 10;
  const HandleClick = () => {
    if(count >= MAX_NUMBER) {
      return;
    }
    setCount(count + 1);
  };
  return (
    <div className={style.container}>
      <div>page</div>
      <div>残りカウント{MAX_NUMBER - count}</div>
      <div>{count}</div>
      <div>{doubleNumber}</div>
      <button className={style.button} onClick={HandleClick}>押せ</button>
    </div>
  );
};

export default page;