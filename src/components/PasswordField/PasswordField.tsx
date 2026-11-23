import { useState } from "react";
import { usePasswordStore } from "../../store/passwordStore";
import CopyIcon from "../../assets/icons/icon-copy.svg?react";

export const PasswordField = () => {
  const [isCopied, setIsCopied] = useState(false);
  const password = usePasswordStore((state) => state.password);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="bg-grey-800 flex items-center justify-between p-4 md:px-8 md:py-4.75">
      <p className="text-grey-700 preset-2 md:preset-1 min-w-0 flex-1 truncate whitespace-nowrap">
        {password}
      </p>

      <div className="flex shrink-0 items-center gap-2 md:gap-4">
        {isCopied && (
          <span
            className="preset-4 md:preset-3 bg-grey-800 text-green-200"
            aria-live="polite"
          >
            COPIED
          </span>
        )}

        <button
          type="button"
          className="cursor-pointer"
          aria-label="Copy password"
          onClick={handleClick}
        >
          <CopyIcon className="h-5 w-4.25" />
        </button>
      </div>
    </div>
  );
};
