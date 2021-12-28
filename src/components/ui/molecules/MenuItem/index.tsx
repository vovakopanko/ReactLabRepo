import { MenuItem } from "@/components/ui/organisms/Header/types";
import { FC } from "react";
import DropDownContainer from "../DropDown";
import ItemsList from "../ItemsList";
import { StyledNavLink } from "./styles";

const MenuItem: FC<MenuItem> = ({ id, link, label, withDropdown }) => {
  return (
    <>
      {withDropdown ? (
        <DropDownContainer item={label} />
      ) : (
        <StyledNavLink to={link}>
          <ItemsList id={id} item={label} />
        </StyledNavLink>
      )}
    </>
  );
};

export default MenuItem;
