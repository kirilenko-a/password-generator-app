import { usePasswordStore } from "../../store/passwordStore";
import type { CheckboxProps } from "../../types/CheckboxProps";

export const Checkbox = ({ label, id, name }: CheckboxProps) => {
  const isChecked = usePasswordStore((state) => state.checkboxes);
  const updateCheckbox = usePasswordStore((state) => state.updateCheckbox);

  const handleChange = () => {
    updateCheckbox(id);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={isChecked[id]}
        onChange={handleChange}
        className="border-grey-200 h-5 w-5 cursor-pointer appearance-none border-2 bg-transparent checked:border-0 checked:bg-green-200 checked:bg-[url(/src/assets/icons/icon-check.svg)] checked:bg-center checked:bg-no-repeat"
      />
      <label
        htmlFor={id}
        className="text-grey-200 preset-4 md:preset-3 cursor-pointer leading-5"
      >
        {label}
      </label>
    </div>
  );
};
