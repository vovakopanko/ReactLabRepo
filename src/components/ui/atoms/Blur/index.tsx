import { FC } from "react";
import styled from "styled-components";

const Blur: FC = ({ children }) => {
  return <BlurEffect>{children}</BlurEffect>;
};

export const BlurEffect = styled.div`
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  backdrop-filter: blur(2px) grayscale(0.5);
  border-radius: 25px;
`;

export default Blur;
