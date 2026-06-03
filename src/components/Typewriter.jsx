import { useEffect, useState } from "react";

/* Rotating typewriter for the hero role line. */
export default function Typewriter({ words = [], typeSpeed = 80, deleteSpeed = 40, pause = 1500 }) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[i % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) {
      delay = pause;
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      delay = 300;
    }

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else {
        const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span>
      {text}
      <span className="cursor-blink" />
    </span>
  );
}
