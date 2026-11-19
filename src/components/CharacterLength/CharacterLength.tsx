import type { CharacterLengthProps } from "../../types/CharacterLengthProps";

export const CharacterLength = ({
  label,
  counter,
  name,
  id,
  min,
  max,
}: CharacterLengthProps) => {
  return (
    <div className="flex flex-col gap-3.5 py-5.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="preset-4 text-grey-200">
          {label}
        </label>

        <p className="preset-2 text-green-200">{counter}</p>
      </div>
      <input
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        className="bg-grey-850 range-input h-2 w-full cursor-pointer"
      />
    </div>
  );
};
