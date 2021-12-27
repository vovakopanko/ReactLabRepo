import { CaretDownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./../../../../styles/palette/index";

export const StyleCaretDownOutlined = styled(CaretDownOutlined)`
  color: ${colors.WHITE};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropDown = styled.div`
  min-width: 120px;
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
  min-width: 100px;
  z-index: 3;
  background-color: ${colors.BLACK};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkItems = styled(NavLink)`
  padding: 8px 2px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.WHITE};
  display: none;
  transition: 0.3 all;
  &.active {
    background-color: ${colors.LIGHT_GRAY};
  }
  &:hover {
    color: ${colors.RED};
  }
  @media (max-width: 768px) {
    display: block;
    font-size: 18px;
    text-align: center;
  }
`;
