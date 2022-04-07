import { useState } from "react";
import { HeaderContainer, Menu, Burger, MenuBurger } from "./style";
import { MenuItem } from "../..";
import Logo from "../../atoms/Logo";
import {
  StyledBtnLogOut,
  StyledNavLink,
  StyleItem,
} from "../../molecules/MenuItem/styles";
import {
  ExportOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { initialState } from "@/redux/initialState";

const webSiteName: string = "Game Store";

const Header = ({
  setIsOpenAuth,
  setIsOpenRegistration,
  isAuth,
  setIsAuth,
  nameUser,
}: {
  setIsOpenAuth: (val: boolean) => void;
  setIsOpenRegistration: (val: boolean) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  nameUser: string;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
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
          {isAuth &&
            initialState.menuItems.map(({ label, link, withDropdown }) => (
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
                  <span style={{ paddingLeft: 10 }}>{nameUser}</span>
                </StyleItem>
              </StyledNavLink>
              <StyledNavLink to={"/basket"}>
                <StyleItem>
                  <ShoppingCartOutlined />{" "}
                  <span style={{ paddingLeft: 10 }}>0</span>
                </StyleItem>
              </StyledNavLink>

              <StyledNavLink
                to={"/home"}
                onClick={() => {
                  setIsAuth(!isAuth);
                }}
              >
                <StyleItem>
                  <ExportOutlined />
                </StyleItem>
              </StyledNavLink>
            </>
          ) : (
            <>
              <div style={{ height: "5vh", paddingBottom: 5 }}>
                <StyleItem onClick={() => setIsOpenAuth(true)}>
                  Registration
                </StyleItem>
              </div>

              <div style={{ height: "5vh" }}>
                <StyleItem onClick={() => setIsOpenRegistration(true)}>
                  Sign Up
                </StyleItem>
              </div>
            </>
          )}
        </MenuBurger>
      )}
      <Menu>
        {isAuth &&
          initialState.menuItems.map(({ label, link, withDropdown }) => (
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
                <span style={{ paddingLeft: 10 }}>{nameUser}</span>
              </StyleItem>
            </StyledNavLink>
            <StyledNavLink to={"/basket"}>
              <StyleItem>
                <ShoppingCartOutlined />{" "}
                <span style={{ paddingLeft: 10 }}>0</span>
              </StyleItem>
            </StyledNavLink>

            <StyledBtnLogOut
              to={"/home"}
              onClick={() => {
                setIsAuth(!isAuth);
              }}
            >
              <StyleItem>
                <ExportOutlined />
              </StyleItem>
            </StyledBtnLogOut>
          </>
        ) : (
          <>
            <StyleItem onClick={() => setIsOpenAuth(true)}>
              Registration
            </StyleItem>
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
