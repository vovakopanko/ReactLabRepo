import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";

export const Blur = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.GRAY};
  width: 30%;
  min-width: 360px;
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
  z-index: 11;
  border-radius: 25px;
  padding: 20px;
`;

export const CloseOutlined = styled.img`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const EditCardContainer = styled.div`
  width: 40%;
  position: fixed;
  margin: auto;
  top: 20%;
  left: 0px;
  right: 0px;
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
  border-radius: 25px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 29px;
  color: ${colors.BLACK};
  padding: 20px;
  width: 95%;
`;

export const CloseButton = styled.div`
  width: 5%;
  justify-content: center;
  align-self: center;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
