import { colors } from "../../../../styles/palette/index";
import styled from "styled-components";
import { StyledProps } from "./types";

const colorScheme = {
  secondary: {
    backgroundColor: colors.PURPURE,
    disabledBackgroundColor: colors.LIGHT_GRAY,
    disabledColor: colors.WHITE,
    color: colors.WHITE,
  },
  primary: {
    backgroundColor: colors.RED,
    disabledBackgroundColor: colors.LIGHT_GRAY,
    disabledColor: colors.BLACK,
    color: colors.WHITE,
  },
};

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.input<StyledProps>`
  width: ${(props) => props.width};
  align-self: center;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => colorScheme[props.buttonType].backgroundColor};
  color: ${(props) => colorScheme[props.buttonType].color};
  border: none;
  margin-top: 10px;
  opacity: 0.95;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${(props) =>
      colorScheme[props.buttonType].disabledBackgroundColor};
    color: ${(props) => colorScheme[props.buttonType].disabledColor};
    opacity: 0.7;
  }
`;
