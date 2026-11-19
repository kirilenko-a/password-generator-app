import { Button } from "../Button";
import { CharacterLength } from "../CharacterLength";
import { Checkbox } from "../Checkbox";
import { StrengthField } from "../StrengthField";

export const SettingsSection = () => {
  const settings = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  return (
    <section className="bg-grey-800 grid gap-8 p-4">
      <CharacterLength
        label="Character Length"
        id="choice"
        name="choice"
        counter={0}
        min={1}
        max={20}
      />

      {settings.map((setting, index) => (
        <Checkbox
          label={setting}
          id={String(index)}
          key={index}
          name={setting}
        />
      ))}

      <StrengthField />
      <Button title="GENERATE" />
    </section>
  );
};
