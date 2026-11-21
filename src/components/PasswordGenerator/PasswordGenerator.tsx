import { usePasswordStore } from "../../store/passwordStore";
import { AppTitle } from "../AppTitle";
import { PasswordField } from "../PasswordField";
import { SettingsSection } from "../SettingsSection";
import { passwordValues } from "../../constants/passwordSettings";
import type { PasswordGeneratorState } from "../../types/PasswordGeneratorState";

export const PasswordGenerator = () => {
  const counter = usePasswordStore((state) => state.counter);
  const checkboxes = usePasswordStore((state) => state.checkboxes);

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
      return "";
    }

    let password = "";

    const array = new Uint32Array(counter);

    window.crypto.getRandomValues(array);

    for (let i = 0; i < array.length; i++) {
      const randomIndex = array[i] % allChars.length;

      password += allChars[randomIndex];
    }
    return password;
  };

  return (
    <main className="bg-grey-950 grid min-h-screen px-4 md:px-0">
      <div className="grid gap-4 self-center md:w-135 md:gap-8 md:justify-self-center">
        <AppTitle title="Password Generator" />
        <PasswordField />
        <SettingsSection />
      </div>
    </main>
  );
};
