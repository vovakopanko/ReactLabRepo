import { colors } from "../../../../styles/palette";

import styled from "styled-components";

export const StyleItem = styled.ul`
  font-size: 18px;
  color: ${colors.WHITE};
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: ${colors.PURPURE};
  }
  padding: 0 20px;
`;

export const TitleItem = styled.span`
  padding-right: 10px;
`;
