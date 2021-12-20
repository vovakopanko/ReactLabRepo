import { FC } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/palette";
import { MenuItem } from "./types";
import styled from "styled-components";

const menuItems: MenuItem[] = [
  { id: 0, item: "Home", link: "/home" },
  { id: 1, item: "Product", link: "/product" },
  { id: 2, item: "About", link: "/about" },
  { id: 3, item: "Sign In", link: "/registration" },
  { id: 4, item: "Sign Up", link: "/signUp" },
];
const webSiteName: string = "Game Store";

const MenuItem = ({ id, link, item }: MenuItem) => {
  return (
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
        <TitleName>{item}</TitleName>
      </TitleBlock>
    </NavLink>
  );
};

const Header: FC = () => {
  return (
    <header
      style={{
        backgroundColor: colors.BLACK,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "60%" }}>
        <p
          style={{
            color: colors.WHITE,
            fontSize: 21,
            paddingLeft: 16,
          }}
        >
          {webSiteName}
        </p>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            link={item.link}
            item={item.item}
          />
        ))}
      </div>
    </header>
  );
};

const TitleName = styled.h1`
  font-size: 18px;
`;

const TitleBlock = styled.section`
  padding: 10;
`;

export default Header;
