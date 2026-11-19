import { Checkbox } from "../Checkbox";

export const CheckboxList = () => {
  const settings = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  return (
    <section className="flex flex-col gap-4">
      {settings.map((setting, index) => (
        <Checkbox
          label={setting}
          id={String(index)}
          key={index}
          name={setting}
        />
      ))}
    </section>
  );
};
