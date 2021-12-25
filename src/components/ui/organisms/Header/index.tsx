import { FC } from "react";
import { MenuItem as MenuItemType } from "./types";
import { HeaderContainer, Menu, Logo } from "./style";
import { MenuItem } from "../..";

const menuItems: MenuItemType[] = [
  { id: 0, item: "Home", link: "/home" },
  { id: 1, item: "Product", link: "", withDropdown: true },
  { id: 2, item: "About", link: "/about" },
  { id: 3, item: "Sign In", link: "/registration" },
  { id: 4, item: "Sign Up", link: "/signUp" },
];

const webSiteName: string = "Game Store";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Logo>{webSiteName}</Logo>
      <Menu>
        {menuItems.map(({ item, link, withDropdown }) => (
          <>
            <MenuItem
              key={item}
              link={link}
              item={item}
              withDropdown={withDropdown}
            />
          </>
        ))}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
