import { colors } from "@/styles/palette";
import styled from "styled-components";

export const CategoryContainer = styled.div`
  &:hover {
    transition: 0.3s;
    align-items: center;

    border: 5px solid ${colors.RED};
    border-width: 5px 5px 10px 5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 20px;
  width: 20vw;
  height: 20vh;

  border-radius: 20px;
  border: solid ${colors.LIGHT_GRAY};
  border-width: 5px 5px 10px 5px;
  background-color: ${colors.BLACK};
`;
export const Subtitle = styled.h3`
  font-size: 18px;
  text-align: center;
  color: ${colors.LIGHT_GRAY};
`;

export const GameLogoImage = styled.img`
  width: 80px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const GameLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BlockItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
