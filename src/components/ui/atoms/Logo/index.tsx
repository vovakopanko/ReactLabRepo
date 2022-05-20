import { FC } from "react";
import { StyleLogo } from "./styles";

const Logo: FC = ({ children }) => {
  return <StyleLogo>{children}</StyleLogo>;
};

export default Logo;
