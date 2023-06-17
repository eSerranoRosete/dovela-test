import React from "react";
import { CenterLayout } from "../layout/CenterLayout";
import { AnimatedText } from "../AnimatedText";

export const HomeView = () => {
  return (
    <CenterLayout>
      <AnimatedText label="This rose is for you 🌹" />
    </CenterLayout>
  );
};
