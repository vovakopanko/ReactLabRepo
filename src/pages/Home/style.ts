import { colors } from "@/styles/palette";
import styled from "styled-components";

export const Title = styled.h2`
  padding-left: 20px;
  font-size: 21px;
  font-weight: 400;
  color: ${colors.LIGHT_GRAY};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 360px;
`;
