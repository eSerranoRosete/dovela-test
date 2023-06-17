import React, { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface Props {
  label: string;
}
export const DecodedText = ({ label }: Props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        Array.from(
          { length: label.length },
          () => CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join("")
      );
    }, 50);
    return () => clearInterval(interval);
  }, [label]);

  return <>{text}</>;
};
