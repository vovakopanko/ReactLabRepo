import { NavLink } from "react-router-dom";
import { colors } from "../../../../styles/palette/index";
import styled, { keyframes } from "styled-components";
export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${colors.LIGHT_GRAY};
  opacity: 0.6;
  z-index: 10;
`;

const modeAnimation = keyframes`
0% {opacity: 0.6;}}
30% {opacity:0.7}
80% {opacity: 0.8}
80% {opacity: 1}
`;

export const AuthContainer = styled.div`
  animation-name: ${modeAnimation};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.GRAY};
  opacity: 0.98;
  padding: 30px;
  z-index: 1000;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  @media (max-width: 420px) {
    padding: 10px;
    min-width: 330px;
  }
  @media (max-width: 320px) {
    padding: 10px;
    min-width: 270px;
  }
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

export const CloseOutlined = styled.img`
  width: 20px;
  height: 20px;
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

export const BtnSubmit = styled.input`
  background-color: ${(props: { styleBtn: boolean }) =>
    props.styleBtn ? colors.PURPURE : colors.LIGHT_GRAY};
  color: ${(props: { styleBtn: boolean }) =>
    props.styleBtn ? colors.WHITE : colors.BLACK};
  opacity: ${(props: { styleBtn: boolean }) => (props.styleBtn ? 1 : 0.3)};
  padding-top: 15px;
  padding-bottom: 12px;
  border-radius: 15px;
  letter-spacing: 5px;
  padding-left: 15px;
  border: none;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
