import { passwordStrengthValues } from "../constants/passwordSettings";

export const getPasswordStrengthTitle = (
  passwordStrengthNumber: number,
): string => {
  switch (passwordStrengthNumber) {
    case 1:
      return passwordStrengthValues.tooWeak;
    case 2:
      return passwordStrengthValues.weak;

    case 3:
      return passwordStrengthValues.medium;
    case 4:
      return passwordStrengthValues.strong;

    default:
      return passwordStrengthValues.empty;
  }
};
