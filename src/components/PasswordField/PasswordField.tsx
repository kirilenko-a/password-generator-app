import type { PasswordFieldProps } from "../../types/PasswordFieldProps";
import { Icon } from "../Icon";

export const PasswordField = ({ password }: PasswordFieldProps) => {
  return (
    <div className="bg-grey-800 flex items-center justify-between p-4">
      <p className="text-grey-700 preset-2 text-[24px] leading-8 font-bold">
        {password}
      </p>

      <button
        type="button"
        className="cursor-pointer"
        aria-label="Copy password"
      >
        <Icon path="/images/icon-copy.svg" width="w-4.25" height="h-5" />
      </button>
    </div>
  );
};
