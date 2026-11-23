import { Checkbox } from "../Checkbox";
import { passwordSettings } from "../../constants/passwordSettings";

export const CheckboxList = () => {
  return (
    <fieldset className="flex flex-col gap-4">
      <legend className="sr-only">Character types to include</legend>
      {passwordSettings.map(({ label, id }) => (
        <Checkbox label={label} id={id} key={id} name={id} />
      ))}
    </fieldset>
  );
};
