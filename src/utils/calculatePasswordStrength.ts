export const calculatePasswordStrength = (
  checkboxesAmount: number,
  passwordLength: number,
): number => {
  let strength = 0;

  if (!checkboxesAmount) {
    return strength;
  }

  if (passwordLength < 8) {
    strength = 1;
  } else if (passwordLength < 14) {
    strength = 2;
  } else {
    strength = 3;
  }

  if (checkboxesAmount >= 3) {
    strength++;
  }

  return strength;
};
