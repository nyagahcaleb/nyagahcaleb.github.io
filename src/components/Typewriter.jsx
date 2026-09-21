import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 28, startDelay = 300 }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  const done = shown.length === text.length;

  return (
    <span>
      {shown}
      <span
        className={`inline-block w-[2px] h-[1em] bg-signal ml-0.5 align-middle ${
          done ? "animate-blink" : ""
        }`}
      />
    </span>
  );
}
