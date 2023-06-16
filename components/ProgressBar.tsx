import React, { useEffect, useState } from "react";

interface Props {
  label: string;
  time: number;
  cb?: () => void;
}
export const ProgressBar = ({ label, time, cb }: Props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage + 1 <= 100 ? prevPercentage + 1 : 100
      );
    }, time);

    if (percentage === 100) cb?.();

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-72">
        <p className="mb-2 text-center">{label}</p>
        <div
          style={{ width: percentage + "%" }}
          className="h-3 bg-primary"
        ></div>
      </div>
    </main>
  );
};
