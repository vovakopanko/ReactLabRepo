import { useEffect, useRef, useState } from "react";
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
import { useCallback } from "react";
import { initialState } from "./menu";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const toggleShow = useCallback(() => {
    setShowDropDown((prev) => !prev);
  }, []);

  const onOpenAuth = useCallback(() => {
    setIsOpenAuth(true);
  }, []);

  const onOpenRegistration = useCallback(() => {
    setIsOpenRegistration(true);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target) {
      return;
    }
    if (ref.current && !ref.current?.contains(event.target as Node)) {
      setShowDropDown(false);
    }
  };

  return (
    <HeaderContainer>
      <Logo>{webSiteName}</Logo>
      <Burger type="button" value="=" onClick={toggleShow} />
      {showDropDown && (
        <MenuBurger ref={ref}>
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
                  <ShoppingCartOutlined />
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
                <StyleItem onClick={onOpenAuth}>Registration</StyleItem>
              </div>

              <div style={{ height: "5vh" }}>
                <StyleItem onClick={onOpenRegistration}>Sign Up</StyleItem>
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
            <StyleItem onClick={onOpenAuth}>Registration</StyleItem>
            <StyleItem onClick={onOpenRegistration}>Sign Up</StyleItem>
          </>
        )}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
