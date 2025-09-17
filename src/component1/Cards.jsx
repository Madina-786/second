import React from "react";
import { Cards as cardsData } from "../constant/Data";
import styles, { layout1 } from "../style.js";

export default function Cards() {
  return (
    <div className={layout1.card2}>
      {cardsData.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>{item.desc}</div>
          <div>
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
