import React, { useCallback, useEffect, useMemo, useState } from "react";
import delay from "delay";
import { AnimatedText } from "./AnimatedText";

interface Props {
  label: string;
  time: number;
  cb?: () => void;
}
export const ProgressBar = ({ label, time, cb }: Props) => {
  const [percentage, setPercentage] = useState(0);

  const callback = useCallback(async () => {
    await delay(1000);
    cb && cb();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage + 1 <= 100 ? prevPercentage + 1 : 100
      );
    }, time);

    if (percentage === 100) {
      callback();
    }

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <div className="w-72">
      <p className="mb-2 text-center">
        <AnimatedText label={label} />
      </p>
      <div className="h-3.5 relative text-center">
        <div
          style={{ width: percentage + "%" }}
          className="bg-primary absolute h-full"
        ></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <p className="mix-blend-difference">{percentage}%</p>
        </div>
      </div>
    </div>
  );
};
