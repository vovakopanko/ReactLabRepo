import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";
export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.input`
  width: ${(props) => props.width};
  align-self: center;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  color: ${colors.WHITE};
  border: none;
  margin-top: 10px;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
  }
`;
