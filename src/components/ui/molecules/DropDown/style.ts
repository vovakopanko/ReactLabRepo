import { colors } from "@/styles/palette";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleDropDown = styled.div`
  min-width: 100px;
  align-items: "center";
  position: relative;
  &:hover > div > a {
    display: block;
    min-width: 120px;
    text-align: center;
    padding: 20px 0;
    @media (max-width: 768px) {
      padding: 5px;
      display: none;
    }
  }
`;

export const DropDownTitle = styled.span`
  font-size: 18px;
  color: ${colors.WHITE};
  padding: 0 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentDropDown = styled.div`
  position: absolute;
  min-width: 80px;
  z-index: 3;
  background-color: ${colors.BLACK};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

export const LinkItems = styled(NavLink)`
  padding: 12px 2px;
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  color: ${colors.WHITE};
  display: none;
  transition: 0.3 all;
  &.active {
    background-color: ${colors.LIGHT_GRAY};
    color: ${colors.WHITE};
    border-radius: 10px;
    min-width: 50px;
  }
  &:hover {
    color: ${colors.PURPURE};
  }
  @media (max-width: 768px) {
    display: block;
    font-size: 18px;
    text-align: center;
  }
`;
