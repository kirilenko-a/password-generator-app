import type React from "react";

export interface SettingsSectionProps {
  counter: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
