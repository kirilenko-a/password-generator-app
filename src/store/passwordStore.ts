import { create } from "zustand";

interface LengthCounterState {
  counter: number;
  updateCounter: (value: number) => void;
}

export const usePasswordStore = create<LengthCounterState>((set) => ({
  counter: 1,
  updateCounter: (value) => set({ counter: value }),
}));
