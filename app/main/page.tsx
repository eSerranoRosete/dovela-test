"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [percentage, setPercentage] = useState(0);
  console.log(percentage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) =>
        prevPercentage + 1 <= 100 ? prevPercentage + 1 : 100
      );
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-72">
        <p className="mb-2 text-center">
          {percentage < 50 ? "Initializing system..." : "Decrypting data ..."}
        </p>
        <div
          style={{ width: percentage + "%" }}
          className="h-3 bg-primary"
        ></div>
      </div>
    </main>
  );
}
