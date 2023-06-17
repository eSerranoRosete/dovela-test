import React, { useCallback, useState } from "react";
import { AnimatedText } from "./AnimatedText";
import delay from "delay";
import { CenterLayout } from "./layout/CenterLayout";

const labels = ["Access Granted", "Welcome back, Eduardo"];

interface Props {
  callback?: () => void;
}

export const AccessGranted = ({ callback }: Props) => {
  const [currentLabel, setCurrentLabel] = useState(labels[0]);

  const onDone = useCallback(async () => {
    await delay(2500);
    setCurrentLabel(labels[1]);
    if (currentLabel === labels[labels.length - 1]) {
      callback && callback();
    }
  }, [currentLabel]);

  return (
    <CenterLayout>
      <AnimatedText onDone={onDone} inputBlink label={currentLabel} />
    </CenterLayout>
  );
};
