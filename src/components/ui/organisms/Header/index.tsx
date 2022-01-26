import { FC, useState } from "react";
import { MenuItem as MenuItemType } from "./types";
import { HeaderContainer, Menu, Burger, MenuBurger } from "./style";
import { MenuItem } from "../..";
import Logo from "../../atoms/Logo";
import { StyledNavLink, StyleItem } from "../../molecules/MenuItem/styles";
import {
  ExportOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const menuItems: MenuItemType[] = [
  { id: 0, label: "Home", link: "/home" },
  { id: 1, label: "Product", link: "", withDropdown: true },
  { id: 2, label: "About", link: "/about" },
];

const webSiteName: string = "Game Store";

const Header: FC = ({
  setIsOpenAuth,
  setIsOpenRegistration,
}: {
  setIsOpenAuth: (val: boolean) => void;
  setIsOpenRegistration: (val: boolean) => void;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  return (
    <HeaderContainer>
      <Logo>{webSiteName}</Logo>
      <Burger
        type="button"
        value="="
        onClick={() => setShowDropDown(!showDropDown)}
      />
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
          {isAuth ? (
            <>
              <StyledNavLink to={"/profile"}>
                <StyleItem>
                  <UserOutlined />
                  <span style={{ paddingLeft: 10 }}>User Name</span>
                </StyleItem>
              </StyledNavLink>
              <StyledNavLink to={"/basket"}>
                <StyleItem>
                  <ShoppingCartOutlined />{" "}
                  <span style={{ paddingLeft: 10 }}>0</span>
                </StyleItem>
              </StyledNavLink>
              <div
                onClick={() => {
                  setIsAuth(!isAuth);
                }}
              >
                <StyleItem>
                  <ExportOutlined />
                </StyleItem>
              </div>
            </>
          ) : (
            <>
              {/* <StyledNavLink to={"/registration"}> */}
              <div style={{ height: "5vh", paddingBottom: 5 }}>
                <StyleItem onClick={() => setIsOpenAuth(true)}>
                  Sign In
                </StyleItem>
              </div>

              {/* </StyledNavLink>
              <StyledNavLink to={"/signUp"}> */}
              <div style={{ height: "5vh" }}>
                <StyleItem onClick={() => setIsOpenRegistration(true)}>
                  Sign Up
                </StyleItem>
              </div>
              {/* </StyledNavLink> */}
            </>
          )}
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
        {isAuth ? (
          <>
            <StyledNavLink to={"/profile"}>
              <StyleItem>
                <UserOutlined />
                <span style={{ paddingLeft: 10 }}>User Name</span>
              </StyleItem>
            </StyledNavLink>
            <StyledNavLink to={"/basket"}>
              <StyleItem>
                <ShoppingCartOutlined />{" "}
                <span style={{ paddingLeft: 10 }}>0</span>
              </StyleItem>
            </StyledNavLink>
            <div
              onClick={() => {
                setIsAuth(!isAuth);
              }}
            >
              <StyleItem>
                <ExportOutlined />
              </StyleItem>
            </div>
          </>
        ) : (
          <>
            <StyleItem onClick={() => setIsOpenAuth(true)}>Sign In</StyleItem>
            <StyleItem onClick={() => setIsOpenRegistration(true)}>
              Sign Up
            </StyleItem>
          </>
        )}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
