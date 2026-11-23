import type { PasswordGeneratorState } from "../types/PasswordGeneratorState";
import { passwordValues } from "../constants/passwordSettings";

export const getRandomPassword = (
  checkboxes: PasswordGeneratorState["checkboxes"],
  passwordState: string,
  passwordLength: number,
): string => {
  const availableCheckboxes = Object.entries(checkboxes)
    .filter((checkbox) => checkbox[1])
    .map((el) => el[0]);

  const filteredValues = availableCheckboxes.map(
    (value) =>
      passwordValues[value as keyof PasswordGeneratorState["checkboxes"]],
  );

  const allChars = filteredValues.join("");

  if (!allChars) {
    return passwordState;
  }

  let password = "";

  const array = new Uint32Array(passwordLength);

  window.crypto.getRandomValues(array);

  for (let i = 0; i < array.length; i++) {
    const randomIndex = array[i] % allChars.length;

    password += allChars[randomIndex];
  }

  return password;
};
