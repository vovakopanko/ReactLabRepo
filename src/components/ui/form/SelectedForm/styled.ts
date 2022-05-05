import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";

export const SortContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SortTitle = styled.span`
  font-size: 14;
  line-height: 2;
  font-weight: 700;
  color: ${colors.WHITE};
  width: 50%;
`;

export const SelectedContainer = styled.select`
  width: 50%;
  height: 30px;
  min-width: 180px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  border-color: ${colors.LIGHT_GRAY};
`;
