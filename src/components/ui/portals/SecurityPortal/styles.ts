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
  background-color: ${colors.GRAY};
  opacity: 0.95;
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
  width: 100%;
`;

export const InputTitle = styled.span`
  color: ${colors.RED};
  min-width: 120px;
`;

export const StyledNavLink = styled(NavLink)`
  margin-top: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const HeaderName = styled.h1`
  color: ${colors.PURPURE};
  width: 90%;
  text-align: center;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  color: ${colors.PURPURE};
  padding: 10px;
  font-size: 14;
`;

export const CloseBtnContainer = styled.div`
  text-align: center;
`;

export const InputBlock = styled.div`
  justify-content: center;
`;

export const ErrorMessage = styled.span`
  color: ${colors.PURPURE};
  font-size: 14;
  padding-top: 10px;
`;

export const InputName = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 2px;
  margin-top: 5px;
  font-size: 14;
  font-weight: 500;
  color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const InputField = styled.input`
  display: block;
  width: 50%;
  border-radius: 4px;
  border: 1px solid ${colors.WHITE};
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
