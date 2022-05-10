import { useEffect, useRef, useState } from "react";
import {
  HeaderContainer,
  Menu,
  Burger,
  MenuBurger,
  RegistrationContainer,
  SignUpContainer,
  TitleItem,
  CloseBurger,
  CloseBtn,
  BasketImage,
  ProfileLogoImage,
} from "./style";
import { MenuItem } from "../..";
import Logo from "../../atoms/Logo";
import {
  Outlined,
  StyledBtnLogOut,
  StyledNavLink,
  StyleItem,
} from "../../molecules/MenuItem/styles";
import { useCallback } from "react";
import { initialState } from "./menu";
import {
  setStatusAuthWindow,
  setStatusRegistrationWindow,
  logOut,
} from "@/redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorUserName,
  selectIsAuthUser,
  selectorCartList,
} from "@/redux/selectors/authSelector";
import basketImage from "../../../../assets/svgIcon/basket.svg";
import ExportOutlined from "../../../../assets/svgIcon/outlined.svg";
import UserOutlined from "../../../../assets/svgIcon/logo.svg";
import { clearCartList } from "@/redux/reducers/cart";
import UserName from "../../atoms/UserName";

const webSiteName: string = "Game Store";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const isAuth = useSelector(selectIsAuthUser);
  const userName = useSelector(selectorUserName);
  const cardsList = useSelector(selectorCartList);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showDropDown) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [showDropDown]);

  const toggleShow = useCallback(() => {
    setShowDropDown((prev) => !prev);
  }, []);

  const onOpenAuth = useCallback(() => {
    dispatch(setStatusAuthWindow(true));
  }, []);

  const onOpenRegistration = useCallback(() => {
    dispatch(setStatusRegistrationWindow(true));
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!event.target) {
        return;
      }
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        setShowDropDown((prev) => !prev);
      }
    },
    [showDropDown]
  );

  const onLogOut = useCallback(() => {
    dispatch(logOut(false));
    dispatch(clearCartList());
  }, []);

  const cardsListLength = cardsList.length;

  return (
    <HeaderContainer>
      <Logo>{webSiteName}</Logo>
      {!showDropDown ? (
        <Burger type="button" value="=" onClick={toggleShow} />
      ) : (
        <CloseBurger>
          <CloseBtn>x</CloseBtn>
        </CloseBurger>
      )}
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
                <UserName userName={userName} />
                <ProfileLogoImage src={UserOutlined} />
              </StyledNavLink>
              <StyledNavLink to={"/basket"}>
                <StyleItem>
                  <BasketImage src={basketImage} />
                  <TitleItem>{cardsListLength}</TitleItem>
                </StyleItem>
              </StyledNavLink>
              <StyledBtnLogOut onClick={onLogOut}>
                <StyleItem>
                  <Outlined src={ExportOutlined} />
                </StyleItem>
              </StyledBtnLogOut>
            </>
          ) : (
            <>
              <RegistrationContainer
                style={{ height: "5vh", paddingBottom: 5 }}
              >
                <StyleItem onClick={onOpenRegistration}>Registration</StyleItem>
              </RegistrationContainer>
              <SignUpContainer style={{ height: "5vh" }}>
                <StyleItem onClick={onOpenAuth}>Sign In</StyleItem>
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
              <UserName userName={userName} />
              <ProfileLogoImage src={UserOutlined} />
            </StyledNavLink>
            <StyledNavLink to={"/basket"}>
              <StyleItem>
                <BasketImage src={basketImage} />
                <TitleItem>{cardsListLength}</TitleItem>
              </StyleItem>
            </StyledNavLink>
            <StyledBtnLogOut onClick={onLogOut}>
              <StyleItem>
                <Outlined src={ExportOutlined} />
              </StyleItem>
            </StyledBtnLogOut>
          </>
        ) : (
          <>
            <StyleItem onClick={onOpenRegistration}>Registration</StyleItem>
            <StyleItem onClick={onOpenAuth}>Sign In</StyleItem>
          </>
        )}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
