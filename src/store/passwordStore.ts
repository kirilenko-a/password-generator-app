import { create } from "zustand";
import type { PasswordGeneratorState } from "../types/PasswordGeneratorState";

export const usePasswordStore = create<PasswordGeneratorState>((set) => ({
  counter: 1,
  updateCounter: (value) => set({ counter: value }),
  checkboxes: {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  },
  updateCheckbox: (id) =>
    set((state) => ({
      checkboxes: {
        ...state.checkboxes,
        [id]: !state.checkboxes[id],
      },
    })),
}));
