import { FC } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/paletteColors";
import useWindowDimensions from "../../constants/dimensions";
import { itemsType } from "./types";

const menuItems: itemsType[] = [
  { id: 0, item: "Home", link: "/home" },
  { id: 1, item: "Product", link: "/product" },
  { id: 2, item: "About", link: "/about" },
  { id: 3, item: "Sign In", link: "/registration" },
  { id: 4, item: "Sign Up", link: "/signUp" },
];
const webSiteName: string = "Game Store";

const MenuContainer = ({ id, link, item }: itemsType) => {
  return (
    <NavLink
      key={id}
      to={link}
      style={({ isActive }) => {
        return {
          color: isActive ? colors.PURPURE : colors.WHITE,
          backgroundColor: isActive ? colors.LIGHT_GRAY : "",
          textDecoration: "none",
        };
      }}
    >
      <div
        style={{
          padding: 10,
          borderBottomColor: colors.WHITE,
          borderWidth: 10,
        }}
      >
        <text style={{ fontSize: 18 }}>{item}</text>
      </div>
    </NavLink>
  );
};

const Header: FC<null> = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      style={{
        backgroundColor: colors.BLACK,
        display: "flex",
        alignItems: "center",
        maxWidth: width,
      }}
    >
      <div style={{ width: "60%" }}>
        <text
          style={{
            color: colors.WHITE,
            fontSize: 21,
            paddingLeft: 16,
          }}
        >
          {webSiteName}
        </text>
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
          <MenuContainer id={item.id} link={item.link} item={item.item} />
        ))}
      </div>
    </div>
  );
};

export default Header;
