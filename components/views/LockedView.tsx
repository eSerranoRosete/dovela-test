"use client";

import React, { useCallback, useState } from "react";
import { CenterLayout } from "../layout/CenterLayout";
import { ProgressBar } from "../ProgressBar";
import { AccessGranted } from "../AccessGranted";
import classNames from "classnames";
import delay from "delay";
import { View } from "@/context/useAppContext";
import { AccessDenied } from "../AccessDenied";

const PASSWORD = "inteminer";

interface Props {
  setView: (view: View) => void;
}
export const LockedView = ({ setView }: Props) => {
  const [accessDenied, setAccessDenied] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onKeyDown = useCallback(async (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const password = e.target.value;
      if (password === PASSWORD) {
        setAccessGranted(true);
      } else {
        setAccessDenied(true);
        await delay(1500);
        setAccessDenied(false);
      }
    }
  }, []);

  if (!loaded) {
    return (
      <CenterLayout>
        <ProgressBar
          cb={() => setLoaded(true)}
          label="Initializing system..."
          time={25}
        />
      </CenterLayout>
    );
  }

  if (accessGranted) {
    return <AccessGranted callback={() => setView("home")} />;
  }

  return (
    <CenterLayout>
      <form
        className={classNames(
          "flex items-center",
          accessDenied && "text-red-600"
        )}
      >
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
    </CenterLayout>
  );
};
