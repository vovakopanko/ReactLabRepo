import { colors } from "./../../../styles/palette/index";
import styled, { keyframes } from "styled-components";

const modeAnimation = keyframes`
0% {opacity: 0.6;}}
30% {opacity:0.7}
80% {opacity: 0.8}
80% {opacity: 1}
`;

export const EditCardContainer = styled.div`
  animation-name: ${modeAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: fixed;
  margin: auto;
  top: 20%;
  left: 0px;
  right: 0px;
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
  border-radius: 25px;
`;

export const Blur = styled.div`
  width: 550px;
  position: fixed;
  min-width: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.GRAY};
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
  z-index: 11;
  border-radius: 25px;
  padding: 20px;
  @media (max-width: 768px) {
    overflow-x: auto;
    width: 80%;
    height: 60%;
    min-width: 280px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 29px;
  color: ${colors.PURPURE};
  padding: 20px;
  width: 95%;
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const CloseButton = styled.div`
  width: 5%;
  justify-content: center;
  align-self: center;
`;

export const CloseOutlined = styled.img`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
