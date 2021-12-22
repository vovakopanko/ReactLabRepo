import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/palette";
import { MenuItem, dropDownItem } from "./types";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import {
  TitleBlock,
  Title,
  DropDownIcon,
  DropDownBlock,
  HeaderContent,
  HeaderLeftBlock,
  HeaderRightBlock,
  TitleName,
} from "./style";

const menuItems: MenuItem[] = [
  { id: 0, item: "Home", link: "/home" },
  { id: 1, item: "Product", link: "/product" },
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

const MenuItem = ({
  id,
  link,
  item,
  setSelectedProduct,
  selectedProduct,
}: MenuItem) => {
  return (
    <>
      {item !== "Product" ? (
        <NavLink
          to={link}
          style={({ isActive }) => {
            return {
              color: isActive ? colors.PURPURE : colors.WHITE,
              backgroundColor: isActive ? colors.LIGHT_GRAY : "",
              textDecoration: "none",
            };
          }}
        >
          <TitleBlock key={id}>
            <Title>{item}</Title>
          </TitleBlock>
        </NavLink>
      ) : (
        <TitleBlock
          onClick={() => setSelectedProduct(!selectedProduct)}
          key={id}
        >
          <Title>{item}</Title>
          <DropDownIcon>
            {selectedProduct ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </DropDownIcon>
        </TitleBlock>
      )}
    </>
  );
};

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

  return (
    <HeaderContent>
      <HeaderLeftBlock>
        <TitleName>{webSiteName}</TitleName>
      </HeaderLeftBlock>
      <HeaderRightBlock>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            link={item.link}
            item={item.item}
            setSelectedProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
          />
        ))}
        {selectedProduct ? <DropdownMenu /> : null}
      </HeaderRightBlock>
    </HeaderContent>
  );
};

export default Header;
