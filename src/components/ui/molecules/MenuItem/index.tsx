import { MenuItem } from "@/components/ui/organisms/Header/types";
import DropDownContainer from "../DropDown";
import ItemsList from "../ItemsList";
import { StyledNavLink } from "./styles";

const MenuItem = ({ id, link, item, withDropdown }: MenuItem) => {
  return (
    <>
      {withDropdown ? (
        <DropDownContainer item={item} />
      ) : (
        <StyledNavLink to={link}>
          <ItemsList id={id} item={item} />
        </StyledNavLink>
      )}
    </>
  );
};

export default MenuItem;
