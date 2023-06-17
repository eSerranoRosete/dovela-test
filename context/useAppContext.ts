import { create } from "zustand";

type State = {
  view: View;
};

export type View = "locked" | "home";

type Actions = {
  setView: (view: View) => void;
};

export const useAppContext = create<State & Actions>((set) => ({
  view: "locked",
  setView: (view) => set({ view }),
}));
