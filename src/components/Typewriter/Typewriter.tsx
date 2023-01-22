import React, { useState, useEffect } from "react";
import "./Typewriter.scss";

export default function Typewriter({
  string,
  start = false,
  timer = 100,
  blink = false,
}: {
  string: string;
  start: boolean;
  timer: number;
  blink: boolean;
}) {
  const [text, setText] = useState<string>("");
  const write = () => {
    let i = 0;
    let local_text = "";
    const interval = setInterval(() => {
      local_text += string[i];
      setText(local_text);
      i++;
      if (i >= string.length) {
        clearInterval(interval);
      }
    }, timer);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (start) {
      write();
    } else {
      setText("");
    }
  }, [start]);

  return (
    <div className="typewriter">
      <div className={"typewriter-text" + (blink ? " blink" : "")}>{text}</div>
    </div>
  );
}
