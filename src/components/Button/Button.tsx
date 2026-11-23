import type { ButtonProps } from "../../types/ButtonProps";
import IconArrowRight from "../../assets/icons/icon-arrow-right.svg?react";

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="preset-4 md:preset-3 hover:bg-grey-800 flex w-full cursor-pointer items-center justify-center gap-4 bg-green-200 py-4.5 leading-5 font-bold hover:border hover:border-green-200 hover:text-green-200"
    >
      {title}
      <IconArrowRight className="h-3 w-2.75" />
    </button>
  );
};
