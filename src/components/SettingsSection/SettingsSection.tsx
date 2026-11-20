import { useLengthCounterStore } from "../../store/passwordStore";
import { Button } from "../Button";
import { CharacterLength } from "../CharacterLength";
import { CheckboxList } from "../CheckboxList";
import { StrengthField } from "../StrengthField";

export const SettingsSection = () => {
  const counter = useLengthCounterStore((store) => store.counter);
  const updateCounter = useLengthCounterStore((store) => store.updateCounter);
  return (
    <section className="bg-grey-800 grid gap-8 p-4 md:px-8 md:py-6">
      <CharacterLength
        label="Character Length"
        id="choice"
        name="choice"
        min={1}
        max={20}
        counter={counter}
        onChange={updateCounter}
      />

      <CheckboxList />

      <StrengthField />
      <Button title="GENERATE" />
    </section>
  );
};
