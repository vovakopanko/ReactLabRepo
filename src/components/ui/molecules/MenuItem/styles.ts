import { colors } from "@/styles/palette";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TitleBlock = styled.div`
  padding: 20px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: ${colors.WHITE};
`;

export const DropDownIcon = styled.span`
  margin-left: 5;
  background-color: ${colors.WHITE};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: ${colors.PURPURE};
    background-color: ${colors.LIGHT_GRAY};
  }
`;
