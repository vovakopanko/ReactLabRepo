import { FC } from "react";
import { BlurEffect } from "./styles";

const Blur: FC = ({ children }) => {
  return <BlurEffect>{children}</BlurEffect>;
};

export default Blur;
