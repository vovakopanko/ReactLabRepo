import { NavLink } from "react-router-dom";
import { colors } from "../../../../styles/palette/index";
import styled from "styled-components";
export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${colors.LIGHT_GRAY};
  opacity: 0.6;
  z-index: 1000;
`;

export const AuthContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.BLACK};
  opacity: 0.85;
  padding: 30px;
  z-index: 1000;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  padding-bottom: 15;
`;

export const AuthTitle = styled.span`
  color: #fff;
  font-size: 30px;
  width: 95%;
`;

export const CloseBtnStyle = styled.button`
  background-color: ${colors.LIGHT_GRAY};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
`;

export const InputTitle = styled.span`
  color: ${colors.RED};
  min-width: 120px;
`;

export const StyledNavLink = styled(NavLink)`
  margin-top: 20;
`;
