import { create } from "zustand";

interface LengthCounterState {
  counter: number;
  updateCounter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useLengthCounterStore = create<LengthCounterState>((set) => ({
  counter: 1,
  updateCounter: (event) =>
    set(() => ({ counter: event.target.valueAsNumber })),
}));
