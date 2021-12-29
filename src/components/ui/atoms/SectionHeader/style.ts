import { colors } from "@/styles/palette";
import styled from "styled-components";

export const Title = styled.h2`
  padding-left: 20px;
  font-size: 21px;
  font-weight: 400;
  color: ${colors.LIGHT_GRAY};
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyleLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.LIGHT_GRAY};
`;
