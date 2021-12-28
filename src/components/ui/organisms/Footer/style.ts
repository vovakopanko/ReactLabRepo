import { colors } from "@/styles/palette";
import styled from "styled-components";

export const StyleStoreGame = styled.a`
  padding: 5;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    padding: 8px 0px;
  }
`;

export const StoreLogo = styled.img`
  width: 100%;
  height: 3vh;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    height: 3vh;
  }
`;

export const FooterContainer = styled.footer`
  height: 3vh;
  background-color: ${colors.LIGHT_GRAY};
  padding: 5px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
