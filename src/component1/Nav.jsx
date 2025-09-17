import React from "react";
import { Navigation } from "../constant/Data";
import styles, { layout1 } from "../style.js";

export default function Nav() {
  return (
    <div>
      <nav className="flex justify-content-around bg-sky-500">
        <div>
          <div>
            <h1 className="text-gray-500">Madina786</h1>
          </div>
          <div className="flex justify-center gap-5">
            {Navigation.map((item) => (
              <ul key={item.Id}>
                <li>{item.title}</li>
              </ul>
            ))}
          </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
