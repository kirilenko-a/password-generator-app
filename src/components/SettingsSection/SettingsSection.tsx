import type { SettingsSectionProps } from "../../types/SettingsSectionProps";
import { Button } from "../Button";
import { CharacterLength } from "../CharacterLength";
import { CheckboxList } from "../CheckboxList";
import { StrengthField } from "../StrengthField";

export const SettingsSection = ({
  counter,
  handleChange,
}: SettingsSectionProps) => {
  return (
    <section className="bg-grey-800 grid gap-8 p-4 md:px-8 md:py-6">
      <CharacterLength
        label="Character Length"
        id="choice"
        name="choice"
        min={1}
        max={20}
        counter={counter}
        handleChange={handleChange}
      />

      <CheckboxList />

      <StrengthField />
      <Button title="GENERATE" />
    </section>
  );
};
