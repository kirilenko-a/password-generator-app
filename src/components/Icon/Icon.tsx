import type { IconProps } from "../../types/IconProps";

export const Icon = ({ path }: IconProps) => {
  return <img src={path} alt="" />;
};
