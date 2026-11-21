import type { PasswordGeneratorState } from "./PasswordGeneratorState";

export interface CheckboxProps {
  label: string;
  id: keyof PasswordGeneratorState["checkboxes"];
  name: string;
}
