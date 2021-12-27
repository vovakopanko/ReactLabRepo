import { colors } from "@/styles/palette";
import { FC } from "react";
import styled from "styled-components";

const Logo: FC = ({ children }) => {
  return <StyleLogo>{children}</StyleLogo>;
};

export const StyleLogo = styled.h1`
  font-weight: 400;
  color: ${colors.WHITE};
  font-size: 21px;
  padding-left: 16px;
`;

export default Logo;
