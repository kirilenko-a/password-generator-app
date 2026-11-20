import { Checkbox } from "../Checkbox";
import { passwordSettings } from "../../constants/passwordSettings";

export const CheckboxList = () => {
  return (
    <section className="flex flex-col gap-4">
      {passwordSettings.map(({ label, id }) => (
        <Checkbox label={label} id={id} key={id} name={id} />
      ))}
    </section>
  );
};
