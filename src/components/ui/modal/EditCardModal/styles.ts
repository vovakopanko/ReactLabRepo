import styled from "styled-components";
import { colors } from "../../../../styles/palette/index";
export const Blur = styled.div`
  position: fixed;
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
  }
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
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const CloseButton = styled.div`
  width: 5%;
  justify-content: center;
  align-self: center;
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

export const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (max-width: 768px) {
    align-self: center;
    align-items: center;
  }
`;

export const ImageTitle = styled.span`
  color: ${colors.BLACK};
  font-size: 21px;
  padding-bottom: 20px;
  padding-top: 10px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 360px;
  border-radius: 25px;
  padding-right: 10px;
  @media (max-width: 768px) {
    align-items: center;
    width: 220px;
    height: 280px;
  }
`;

export const InfoContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const InfoTitle = styled.div`
  color: ${colors.BLACK};
  font-size: 21px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
