import { colors } from "@/styles/palette";
import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 40%;
  align-self: center;
  height: 40px;
  border-radius: 15px;
  background-color: ${colors.LIGHT_GRAY};
  color: ${colors.WHITE};
  border: none;
  &:hover {
    background-color: ${colors.RED};

    cursor: pointer;
  }
`;

export const Title = styled.span`=
    font-size: 21;
`;
