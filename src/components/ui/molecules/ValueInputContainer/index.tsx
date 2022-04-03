import { colors } from "../../../../styles/palette/index";
import styled from "styled-components";

const ValueInputContainer = ({
  title,
  type,
}: {
  title: string;
  type: string;
}) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <input placeholder="..." type={type} name={title} autoComplete="off" />
    </InputContainer>
  );
};

export default ValueInputContainer;

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
  padding: 30px;
  z-index: 1000;
  width: 400px;
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
  align-items: center;
  align-self: flex-start;
  width: 100%;
`;

export const InputTitle = styled.div`
  color: ${colors.WHITE};
  font-size: 24px;
  width: 60%;
  padding-bottom: 10px;
  padding-top: 10px;
`;
