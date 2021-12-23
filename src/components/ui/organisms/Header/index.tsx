import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../../../../styles/palette";
import { MenuItem as MenuItemType, dropDownItem } from "./types";
import { DropDownBlock, HeaderContainer, Menu, Logo } from "./style";
import { MenuItem } from "../..";
import { useCallback } from "react";
import { DropDownIcon } from "../../molecules/MenuItem/styles";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const menuItems: MenuItemType[] = [
  { id: 0, item: "Home", link: "/home" },
  { id: 1, item: "Product", link: "", withDropdown: true },
  { id: 2, item: "About", link: "/about" },
  { id: 3, item: "Sign In", link: "/registration" },
  { id: 4, item: "Sign Up", link: "/signUp" },
];

const dropDownItems: dropDownItem[] = [
  { id: 0, title: "PC", link: "/pc" },
  { id: 1, title: "Xbox", link: "/xbox" },
  { id: 2, title: "Playstation 5", link: "/ps5" },
];

const webSiteName: string = "Game Store";

const DropdownMenu = () => {
  return (
    <DropDownBlock>
      {dropDownItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          style={{
            height: 50,
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            textDecoration: "none",
            color: colors.WHITE,
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </DropDownBlock>
  );
};

const Header: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(false);
  const onProductClick = useCallback(
    () => setSelectedProduct((isSelected) => !isSelected),
    []
  );

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
            {withDropdown && (
              <DropDownIcon onClick={onProductClick}>
                {selectedProduct ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </DropDownIcon>
            )}
          </>
        ))}
        {selectedProduct ? <DropdownMenu /> : null}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
