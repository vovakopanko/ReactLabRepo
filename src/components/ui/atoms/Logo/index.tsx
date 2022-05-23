import { FC, ReactNode } from "react";
import { StyleLogo } from "./styles";

type Props = {
  children?: ReactNode;
};

const Logo: FC<Props> = ({ children }) => {
  return <StyleLogo>{children}</StyleLogo>;
};

export default Logo;
