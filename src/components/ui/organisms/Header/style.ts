import { colors } from "@/styles/palette";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5vh;
  justify-content: space-between;
  background-color: ${colors.BLACK};
  display: flex;
  align-items: center;
  &:hover > input {
    opacity: 0.8;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1368px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropDownBlock = styled.div`
  position: absolute;
  top: 72px;
  right: 22%;
  width: 100px;
  padding: 1rem;
  overflow: hidden;
  z-index: 5;
  background-color: ${colors.BLACK};
`;

export const Burger = styled.input`
  color: ${colors.WHITE};
  background-color: ${colors.BLACK};
  padding: 10px;
  border: none;
  overflow: hidden;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const CloseBurger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.BLACK};
  align-items: center;
  border: none;
  overflow: hidden;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseBtn = styled.span`
  padding: 10px;
  padding-top: 20px;
  /* text-align: center;
  justify-content: center; */
  color: ${colors.WHITE};
  &:hover {
    cursor: pointer;
  }
`;

export const MenuBurger = styled.div`
  display: none;
  @media (max-width: 768px) {
    z-index: 3;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 5vh;
    width: 100vw;
    height: 50vh;
    justify-content: center;
    flex-direction: column;
    background-color: ${colors.BLACK};
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 0px 5px 5px 0px ${colors.LIGHT_GRAY};
  }
`;

export const TitleItem = styled.span`
  padding-right: 10px;
`;

export const ProfileLogoImage = styled.img`
  width: 25px;
  height: 25px;
  margin-left: -20px;
  padding-right: 15px;
`;

export const BasketImage = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const UserLogoImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const RegistrationContainer = styled.div``;
export const SignUpContainer = styled.div``;
