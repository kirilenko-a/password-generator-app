import type { AppTitleProrps } from "../../types/AppTitleProps";

export const AppTitle = ({ title }: AppTitleProrps) => {
  return (
    <h1 className="preset-4 text-grey-600 md:preset-2 text-center">{title}</h1>
  );
};
