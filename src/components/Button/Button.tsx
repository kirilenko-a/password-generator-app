import type { ButtonProps } from "../../types/ButtonProps";

export const Button = ({ title }: ButtonProps) => {
  return (
    <button
      type="button"
      className="flex w-full cursor-pointer items-center justify-center gap-4 bg-green-200 py-4.5 leading-5 font-bold"
    >
      {title}
      <img src="/images/icon-arrow-right.svg" alt="" />
    </button>
  );
};
