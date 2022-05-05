import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";
export const CheckedTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
  width: 50%;
`;

export const CheckedContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  width: 100%;
`;

export const CheckedTitle = styled.span`
  font-size: 14;
  line-height: 2;
  font-weight: 700;
  color: ${colors.BLACK};
  width: 50%;
`;

export const CheckedContent = styled.div`
  width: 50%;
`;

export const CheckBoxTitle = styled.span`
  color: ${colors.BLACK};
  font-size: 18px;
`;

export const CheckBoxContent = styled.div`
  display: flex;
  padding-bottom: 5px;
`;
