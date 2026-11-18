import type { IconProps } from "../../types/IconProps";

export const Icon = ({ path, width, height }: IconProps) => {
  return <img src={path} alt="" className={`${width} ${height}`} />;
};
