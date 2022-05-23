import { FC, ReactNode } from "react";
import { BlurEffect } from "./styles";

type Props = {
  children?: ReactNode;
};

const Blur: FC<Props> = ({ children }) => {
  return <BlurEffect>{children}</BlurEffect>;
};

export default Blur;
