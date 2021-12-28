import { colors } from "@/styles/palette";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DropDownIcon = styled.span`
  margin-left: 5;
  background-color: ${colors.WHITE};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 5vh;
  @media (max-width: 768px) {
    padding-bottom: 5px;
  }
  &.active {
    background-color: ${colors.LIGHT_GRAY};
    @media (max-width: 768px) {
      padding-bottom: 5px;
      background-color: transparent;
    }
  }
`;
