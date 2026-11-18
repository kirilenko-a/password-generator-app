import { Icon } from "../Icon";

export const PasswordField = () => {
  return (
    <div className="bg-grey-800 flex items-center justify-between p-4">
      <p className="text-grey-700 text-[24px] leading-8 font-bold">P4$5W0rD!</p>

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
