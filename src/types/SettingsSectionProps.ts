import type React from "react";

export interface SettingsSectionProps {
  counter: number;
  handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
}
