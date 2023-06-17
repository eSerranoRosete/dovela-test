import React, { useMemo, useState } from "react";
import delay from "delay";

interface Props {
  label: string;
  time?: number;
  inputBlink?: boolean;
  onDone?: () => void;
}

export const AnimatedText = ({
  label,
  time = 25,
  inputBlink,
  onDone,
}: Props) => {
  const [text, setText] = useState("");

  useMemo(async () => {
    setText("");
    for (let letter of label) {
      await delay(time);
      setText((prev) => prev + letter);
    }
    onDone && onDone();
  }, [label]);

  return (
    <>
      {text}
      {text === label && inputBlink && (
        <span className="animate-blink ml-2">_</span>
      )}
    </>
  );
};
