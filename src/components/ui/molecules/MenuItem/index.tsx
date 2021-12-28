import { MenuItem } from "@/components/ui/organisms/Header/types";
import { FC } from "react";
import DropDownContainer from "../DropDown";
import { StyledNavLink, StyleItem } from "./styles";

const MenuItem: FC<MenuItem> = ({ id, link, label, withDropdown }) => {
  return (
    <>
      {withDropdown ? (
        <DropDownContainer item={label} />
      ) : (
        <StyledNavLink to={link}>
          <StyleItem key={id}>{label}</StyleItem>
        </StyledNavLink>
      )}
    </>
  );
};

export default MenuItem;
