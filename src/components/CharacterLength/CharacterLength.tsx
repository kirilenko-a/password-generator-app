import { usePasswordStore } from "../../store/passwordStore";
import type { CharacterLengthProps } from "../../types/CharacterLengthProps";

export const CharacterLength = ({
  label,
  name,
  id,
  min,
  max,
}: CharacterLengthProps) => {
  const counter = usePasswordStore((store) => store.counter);
  const updateCounter = usePasswordStore((store) => store.updateCounter);
  const fillRate = ((counter - min) / (max - min)) * 100;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateCounter(event.target.valueAsNumber);
  };

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="preset-4 text-grey-200 md:preset-3">
          {label}
        </label>

        <p className="preset-2 md:preset-1 text-green-200">{counter}</p>
      </div>
      <input
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        value={counter}
        className="range-input h-2 w-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--color-green-200) ${fillRate}%, var(--color-grey-850) ${fillRate}%)`,
        }}
        onChange={handleChange}
      />
    </div>
  );
};
