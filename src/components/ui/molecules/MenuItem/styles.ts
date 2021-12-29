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

export const StyleItem = styled.ul`
  font-size: 18px;
  color: ${colors.WHITE};
  list-style-type: none;
  &:hover {
    color: ${colors.RED};
  }
  padding: 0 20px;
`;

// export const Item = styled.li`
//   font-size: 18px;
//   color: ${colors.WHITE};
//   list-style-type: none;
//   &:hover {
//     color: ${colors.RED};
//   }
// `;
