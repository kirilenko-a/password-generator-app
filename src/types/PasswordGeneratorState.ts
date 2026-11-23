export interface PasswordGeneratorState {
  counter: number;
  updateCounter: (value: number) => void;
  checkboxes: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
  updateCheckbox: (id: keyof PasswordGeneratorState["checkboxes"]) => void;
  password: string;
  updatePassword: (password: string) => void;
  passwordStrength: number;
  updatePasswordStrength: (strength: number) => void;
  passwordStrengthTitle: string;
  updatePasswordStrengthTitle: (strength: string) => void;
}
