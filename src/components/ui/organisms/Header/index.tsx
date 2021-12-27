import { FC, useState } from "react";
import { MenuItem as MenuItemType } from "./types";
import { HeaderContainer, Menu, Burger, MenuBurger } from "./style";
import { MenuItem } from "../..";
import Logo from "../../atoms/Logo";

const menuItems: MenuItemType[] = [
  { id: 0, item: "Home", link: "/home" },
  { id: 1, item: "Product", link: "", withDropdown: true },
  { id: 2, item: "About", link: "/about" },
  { id: 3, item: "Sign In", link: "/registration" },
  { id: 4, item: "Sign Up", link: "/signUp" },
];

const webSiteName: string = "Game Store";

const Header: FC = () => {
  const [onClick, setOnClick] = useState(false);
  return (
    <HeaderContainer>
      <Logo>{webSiteName}</Logo>
      <Burger type="button" value="=" onClick={() => setOnClick(!onClick)} />
      {onClick && (
        <MenuBurger>
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
        </MenuBurger>
      )}
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
