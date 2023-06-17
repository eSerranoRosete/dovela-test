import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const CenterLayout = ({ children }: Props) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      {children}
    </main>
  );
};
