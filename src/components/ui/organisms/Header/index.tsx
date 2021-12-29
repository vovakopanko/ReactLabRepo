import { FC, useCallback, useState } from "react";
import { MenuItem as MenuItemType } from "./types";
import { HeaderContainer, Menu, Burger, MenuBurger } from "./style";
import { MenuItem } from "../..";
import Logo from "../../atoms/Logo";

const menuItems: MenuItemType[] = [
  { id: 0, label: "Home", link: "/home" },
  { id: 1, label: "Product", link: "", withDropdown: true },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Sign In", link: "/registration" },
  { id: 4, label: "Sign Up", link: "/signUp" },
];

const webSiteName: string = "Game Store";

const Header: FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleShowDropDown = useCallback(
    () => () => setShowDropDown((isShow) => !isShow),
    []
  );
  return (
    <HeaderContainer>
      <Logo>{webSiteName}</Logo>
      <Burger type="button" value="=" onClick={() => toggleShowDropDown} />
      {showDropDown && (
        <MenuBurger>
          {menuItems.map(({ label, link, withDropdown }) => (
            <MenuItem
              key={label}
              link={link}
              label={label}
              withDropdown={withDropdown}
            />
          ))}
        </MenuBurger>
      )}
      <Menu>
        {menuItems.map(({ label, link, withDropdown }) => (
          <MenuItem
            key={label}
            link={link}
            label={label}
            withDropdown={withDropdown}
          />
        ))}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
