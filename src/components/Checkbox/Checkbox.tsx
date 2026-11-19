import type { CheckboxProps } from "../../types/CheckboxProps";

export const Checkbox = ({ label, id, name }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="border-grey-200 h-5 w-5 cursor-pointer appearance-none border-2 bg-transparent checked:border-0 checked:bg-green-200 checked:bg-[url(/images/icon-check.svg)] checked:bg-center checked:bg-no-repeat"
      />
      <label
        htmlFor={id}
        className="text-grey-200 preset-4 cursor-pointer leading-5"
      >
        {label}
      </label>
    </div>
  );
};
