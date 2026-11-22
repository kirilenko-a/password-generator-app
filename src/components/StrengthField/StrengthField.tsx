import { usePasswordStore } from "../../store/passwordStore";

export const StrengthField = () => {
  const passwordStrength = usePasswordStore((state) => state.passwordStrength);

  return (
    <div className="bg-grey-850 flex items-center justify-between px-4 py-3.5">
      <p className="text-grey-600 preset-4 md:preset-3">STRENGTH</p>

      <div className="flex items-center gap-4">
        <p className="preset-2 text-grey-200">{passwordStrength}</p>

        <div className="flex gap-2">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="border-grey-200 h-7 w-2.5 border-2" />
          ))}
        </div>
      </div>
    </div>
  );
};
