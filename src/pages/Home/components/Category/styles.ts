import { NavLink } from "react-router-dom";
import { colors } from "@/styles/palette";
import styled from "styled-components";

export const CategoryContainer = styled(NavLink)`
  text-decoration: none;
  &:hover {
    transition: 0.3s;
    align-items: center;
    box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
    border-width: 5px 5px 10px 5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 20px;
  width: 240px;
  height: 210px;

  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px ${colors.LIGHT_GRAY};
  border-width: 5px 5px 10px 5px;
  background-color: ${colors.BLACK};
  @media (max-width: 768px) {
    width: 240px;
    height: 180px;
  }
  @media (max-width: 1224px) {
    width: 200px;
    height: 180px;
  }
`;

export const GameImage = styled.img`
  width: 80px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const GameLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Subtitle = styled.span`
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: ${colors.LIGHT_GRAY};
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
