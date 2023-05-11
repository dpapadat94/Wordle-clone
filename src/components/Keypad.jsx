import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);
  const allLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  useEffect(() => {
    setLetters(allLetters);
  }, []);

  const warning = () => {
    document.querySelector(".disclaimer").classList.add("warning");
    console.log("enter");
  };
  const warningEnd = () => {
    document.querySelector(".disclaimer").classList.remove("warning");
  };

  return (
    <div onMouseEnter={warning} onMouseLeave={warningEnd} className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l];
          return (
            <div key={l} className={color}>
              {l}
            </div>
          );
        })}
    </div>
  );
}
