"use client";

import { HomeView } from "@/components/views/HomeView";
import { LockedView } from "@/components/views/LockedView";
import { useAppContext } from "@/context/useAppContext";

export default function Home() {
  const view = useAppContext((state) => state.view);
  const setView = useAppContext((state) => state.setView);

  switch (view) {
    case "locked":
      return <LockedView setView={setView} />;
    case "home":
      return <HomeView />;
    default:
      return <LockedView setView={setView} />;
  }
}
