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
  passwordStrength: string;
  updatePasswordStrength: (strength: string) => void;
}
