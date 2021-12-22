import { colors } from "./../../styles/palette/index";
import styled from "styled-components";

export const BlockImageLogo = styled.a`
  padding: 5;
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: 25px;
`;

export const FooterContent = styled.footer`
  background-color: ${colors.LIGHT_GRAY};
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
