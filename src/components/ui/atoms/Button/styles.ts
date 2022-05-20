import { colors } from "../../../../styles/palette/index";
import styled, { keyframes } from "styled-components";
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

const hoverBtnAnimation = keyframes`
0% {opacity: 0.9; box-shadow: 0px 0px 5px 0px ${colors.WHITE}; }
30% {opacity:0.8; box-shadow: 0px 0px 8px 0px ${colors.WHITE}; }
50% {opacity: 0.8; box-shadow: 0px 0px 12px 0px ${colors.WHITE};}
100% {opacity: 0.9; box-shadow: 0px 0px 15px 0px ${colors.WHITE};}
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
    animation-name: ${hoverBtnAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
  }
  &:disabled {
    animation-name: ${hoverBtnAnimation};
    animation-duration: 0s;
    background-color: ${(props) =>
      colorScheme[props.buttonType].disabledBackgroundColor};
    color: ${(props) => colorScheme[props.buttonType].disabledColor};
    opacity: 0.7;
  }
`;
