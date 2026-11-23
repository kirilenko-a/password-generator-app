export const passwordSettings = [
  { id: "uppercase", label: "Include Uppercase Letters" },
  { id: "lowercase", label: "Include Lowercase Letters" },
  { id: "numbers", label: "Include Numbers" },
  { id: "symbols", label: "Include Symbols" },
] as const;

export const passwordValues = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_-+=[]{}|?",
};

export const passwordStrengthValues = {
  empty: "SELECT AN OPTION",
  tooWeak: "TOO WEAK",
  weak: "WEAK",
  medium: "MEDIUM",
  strong: "STRONG",
};

export const strengthColors: Record<number, string> = {
  1: "bg-red-500",
  2: "bg-orange-400",
  3: "bg-yellow-400",
  4: "bg-green-200",
};
