import { useEffect, useRef, useState } from "react";
import {
  HeaderContainer,
  Menu,
  Burger,
  MenuBurger,
  RegistrationContainer,
  SignUpContainer,
  TitleItem,
} from "./style";
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
import {
  setAuthCurrentUser,
  setStatusAuthWindow,
  setStatusRegistrationWindow,
  logOut,
} from "@/redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorUserName,
  selectorIsAuthUser,
} from "@/redux/selectors/AuthSelector";

const webSiteName: string = "Game Store";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const isAuth = useSelector(selectorIsAuthUser);
  const userName = useSelector(selectorUserName);
  const dispatch = useDispatch();

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
    dispatch(setStatusAuthWindow(true));
  }, []);

  const onOpenRegistration = useCallback(() => {
    dispatch(setStatusRegistrationWindow(true));
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (!event.target) {
      return;
    }
    if (ref.current && !ref.current?.contains(event.target as Node)) {
      setShowDropDown(false);
    }
  };

  const onClick = useCallback(() => {
    dispatch(logOut(false));
  }, []);

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
                  <TitleItem>{userName}</TitleItem>
                </StyleItem>
              </StyledNavLink>
              <StyledNavLink to={"/basket"}>
                <StyleItem>
                  <ShoppingCartOutlined />
                  <TitleItem>0</TitleItem>
                </StyleItem>
              </StyledNavLink>
              <StyledNavLink to={"/home"} onClick={() => onClick()}>
                <StyleItem>
                  <ExportOutlined />
                </StyleItem>
              </StyledNavLink>
            </>
          ) : (
            <>
              <RegistrationContainer
                style={{ height: "5vh", paddingBottom: 5 }}
              >
                <StyleItem onClick={onOpenRegistration}>Registration</StyleItem>
              </RegistrationContainer>
              <SignUpContainer style={{ height: "5vh" }}>
                <StyleItem onClick={onOpenAuth}>Sign Up</StyleItem>
              </SignUpContainer>
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
                <TitleItem>{userName}</TitleItem>
              </StyleItem>
            </StyledNavLink>
            <StyledNavLink to={"/basket"}>
              <StyleItem>
                <ShoppingCartOutlined />
                <TitleItem>0</TitleItem>
              </StyleItem>
            </StyledNavLink>
            <StyledBtnLogOut to={"/home"} onClick={() => onClick()}>
              <StyleItem>
                <ExportOutlined />
              </StyleItem>
            </StyledBtnLogOut>
          </>
        ) : (
          <>
            <StyleItem onClick={onOpenRegistration}>Registration</StyleItem>
            <StyleItem onClick={onOpenAuth}>Sign Up</StyleItem>
          </>
        )}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
