"use client";

import { ProgressBar } from "@/components/ProgressBar";
import { useCallback, useEffect, useState } from "react";

const PASSWORD = "1234";

export default function Home() {
  const [accessDenied, setAccessDenied] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onKeyDown = useCallback((e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const password = e.target.value;
      if (password === PASSWORD) {
        console.log("✅");
        setAccessGranted(true);
      } else {
        console.log("❌");
        setAccessDenied(true);
      }
    }
  }, []);

  useEffect(() => {
    // set access denied to false after 3 seconds
    const timeout = setTimeout(() => {
      setAccessDenied(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [accessDenied]);

  if (!loaded) {
    return (
      <ProgressBar
        cb={() => setLoaded(true)}
        label="Initializing system..."
        time={25}
      />
    );
  }

  if (accessDenied) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center text-red-600">
        Access Denied
      </div>
    );
  }

  if (accessGranted) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center text-primary">
        Access Granted
      </div>
    );
  }

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <form className="flex items-center">
        <label htmlFor="password" className="mr-3">
          Enter Password
        </label>
        <div>
          [
          <input
            autoFocus
            className="bg-transparent w-20 mx-4 border-none focus:outline-none"
            type="password"
            name="password"
            id="password"
            onKeyDown={onKeyDown}
          />
          ]
        </div>
      </form>
    </main>
  );
}
