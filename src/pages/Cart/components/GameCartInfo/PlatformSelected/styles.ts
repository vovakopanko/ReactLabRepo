import styled from "styled-components";
import { colors } from "@/styles/palette";

export const PlatformBlock = styled.div`
  width: 15%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectedPlatform = styled.select`
  min-width: 100px;
  height: 30px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  &:hover {
    cursor: pointer;
  }
`;
