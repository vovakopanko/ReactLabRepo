import { FC } from "react";
import DropDownContainer from "../DropDown";
import { HeaderContainerMenu, StyledNavLink, StyleItem } from "./styles";
import { MenuItem } from "./type";

const MenuItem: FC<MenuItem> = ({ id, link, label, withDropdown }) => {
  return (
    <HeaderContainerMenu>
      {withDropdown ? (
        <DropDownContainer item={label} />
      ) : (
        <StyledNavLink to={link}>
          <StyleItem key={id}>{label}</StyleItem>
        </StyledNavLink>
      )}
    </HeaderContainerMenu>
  );
};

export default MenuItem;
