import type { ButtonProps } from "../../types/ButtonProps";
import { Icon } from "../Icon";

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="preset-4 md:preset-3 flex w-full cursor-pointer items-center justify-center gap-4 bg-green-200 py-4.5 leading-5 font-bold"
    >
      {title}
      <Icon path="/images/icon-arrow-right.svg" width="w-2.75" height="h-3" />
    </button>
  );
};
