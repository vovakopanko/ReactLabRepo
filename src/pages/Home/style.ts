import { colors } from "@/styles/palette";
import styled from "styled-components";

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.LIGHT_GRAY};
`;

export const Title = styled.h2`
  padding-left: 20px;
  font-size: 21px;
  font-weight: 400;
  color: ${colors.LIGHT_GRAY};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlurEffect = styled.div`
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  backdrop-filter: blur(2px) grayscale(0.5);
  border-radius: 25px;
`;
