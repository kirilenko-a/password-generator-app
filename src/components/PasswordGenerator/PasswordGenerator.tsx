import { AppTitle } from "../AppTitle";
import { PasswordField } from "../PasswordField";
import { SettingsSection } from "../SettingsSection";

export const PasswordGenerator = () => {
  return (
    <main className="bg-grey-950 grid min-h-screen px-4">
      <div className="grid gap-4 self-center md:w-135 md:gap-8 md:justify-self-center">
        <AppTitle title="Password Generator" />
        <PasswordField password="P4$5W0rD!" />
        <SettingsSection />
      </div>
    </main>
  );
};
