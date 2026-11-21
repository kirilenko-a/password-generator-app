import { useState } from "react";
import { Icon } from "../Icon";
import { usePasswordStore } from "../../store/passwordStore";

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
      <p className="text-grey-700 preset-2 md:preset-1">{password}</p>

      <div className="flex items-center gap-2 md:gap-4">
        {isCopied && (
          <span className="preset-4 md:preset-3 text-green-200">COPIED</span>
        )}

        <button
          type="button"
          className="cursor-pointer"
          aria-label="Copy password"
          onClick={handleClick}
        >
          <Icon path="/images/icon-copy.svg" width="w-4.25" height="h-5" />
        </button>
      </div>
    </div>
  );
};
