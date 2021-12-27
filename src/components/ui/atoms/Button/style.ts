import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 25;
  min-width: 40%;
  align-self: center;
  height: 40px;
  border-radius: 15px;
  background-color: ${colors.LIGHT_GRAY};
  color: ${colors.WHITE};
  &:hover {
    background-color: ${colors.RED};
  }
`;

export const Title = styled.span`=
    font-size: 18;
`;
