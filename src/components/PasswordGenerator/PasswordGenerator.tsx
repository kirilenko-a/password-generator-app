import { usePasswordStore } from "../../store/passwordStore";
import { AppTitle } from "../AppTitle";
import { PasswordField } from "../PasswordField";
import { SettingsSection } from "../SettingsSection";
import { passwordValues } from "../../constants/passwordSettings";
import { passwordStrengthValues } from "../../constants/passwordSettings";

import type { PasswordGeneratorState } from "../../types/PasswordGeneratorState";

export const PasswordGenerator = () => {
  const passwordLength = usePasswordStore((state) => state.counter);
  const checkboxes = usePasswordStore((state) => state.checkboxes);
  const passwordState = usePasswordStore((state) => state.password);
  const updatePassword = usePasswordStore((state) => state.updatePassword);
  const updatePasswordStrength = usePasswordStore(
    (state) => state.updatePasswordStrength,
  );

  const availableCheckboxes = Object.entries(checkboxes)
    .filter((checkbox) => checkbox[1])
    .map((el) => el[0]);

  const filteredValues = availableCheckboxes.map(
    (value) =>
      passwordValues[value as keyof PasswordGeneratorState["checkboxes"]],
  );

  const getRandomPassword = () => {
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

  const checkboxesAmount = Object.entries(checkboxes).filter(
    (checkbox) => checkbox[1],
  ).length;

  const calculatePasswordStrength = () => {
    let strength = 1;

    if (passwordLength <= 4) {
      return strength;
    }

    if (passwordLength >= 8) {
      strength = 2;
    }

    if (passwordLength >= 12) {
      strength = 3;
    }

    if (checkboxesAmount >= 3) {
      strength++;
    }

    return strength;
  };

  const handlePasswordStrength = () => {
    const passwordStrengthNumber = calculatePasswordStrength();
    let strength = "";

    if (passwordStrengthNumber === 1) {
      strength = passwordStrengthValues.tooWeak;
    }

    if (passwordStrengthNumber === 2) {
      strength = passwordStrengthValues.weak;
    }

    if (passwordStrengthNumber === 3) {
      strength = passwordStrengthValues.medium;
    }

    if (passwordStrengthNumber === 4) {
      strength = passwordStrengthValues.strong;
    }

    if (checkboxesAmount) {
      updatePasswordStrength(strength);
    }
  };

  const handleGenerate = () => {
    const password = getRandomPassword();
    updatePassword(password);
    handlePasswordStrength();
  };

  return (
    <main className="bg-grey-950 grid min-h-screen px-4 md:px-0">
      <div className="grid gap-4 self-center md:w-135 md:gap-8 md:justify-self-center">
        <AppTitle title="Password Generator" />
        <PasswordField />
        <SettingsSection onClick={handleGenerate} />
      </div>
    </main>
  );
};
