import { usePasswordStore } from "../../store/passwordStore";
import { AppTitle } from "../AppTitle";
import { PasswordField } from "../PasswordField";
import { SettingsSection } from "../SettingsSection";
import { calculatePasswordStrength } from "../../utils/calculatePasswordStrength";
import { getRandomPassword } from "../../utils/generatePassword";
import { getPasswordStrengthTitle } from "../../utils/getPasswordStrengthTitle";

export const PasswordGenerator = () => {
  const passwordLength = usePasswordStore((state) => state.counter);
  const checkboxes = usePasswordStore((state) => state.checkboxes);
  const passwordState = usePasswordStore((state) => state.password);
  const updatePassword = usePasswordStore((state) => state.updatePassword);
  const updatePasswordStrength = usePasswordStore(
    (state) => state.updatePasswordStrength,
  );
  const updatePasswordStrengthTitle = usePasswordStore(
    (state) => state.updatePasswordStrengthTitle,
  );

  const checkboxesAmount = Object.entries(checkboxes).filter(
    (checkbox) => checkbox[1],
  ).length;

  const handlePasswordStrength = () => {
    const passwordStrengthNumber = calculatePasswordStrength(
      checkboxesAmount,
      passwordLength,
    );
    updatePasswordStrength(passwordStrengthNumber);

    const passwordStrengthTitle = getPasswordStrengthTitle(
      passwordStrengthNumber,
    );

    updatePasswordStrengthTitle(passwordStrengthTitle);
  };

  const handleGenerate = () => {
    const password = getRandomPassword(
      checkboxes,
      passwordState,
      passwordLength,
    );
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
