import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";

export const SearchBlock = styled.div`
  width: 80%;
  padding: 20px;
  justify-content: center;
  display: flex;
`;

export const Input = styled.input`
  color: ${colors.WHITE};
  width: 95%;
  height: 30px;
  background-color: ${colors.BLACK};
  opacity: 0.8;
  border-radius: 15px;
  border: 2px solid ${colors.WHITE};
  padding-left: 10px;
`;
