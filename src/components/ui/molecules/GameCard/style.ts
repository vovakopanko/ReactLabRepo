import { Link } from "react-router-dom";
import { colors } from "@/styles/palette";
import styled from "styled-components";

export const GamesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  @media (max-width: 1368px) {
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Span = styled.span`
  padding: 10px;
  font-size: 17px;
  color: ${colors.WHITE};
  padding-bottom: 5px;
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const ImagePlatform = styled.img`
  width: 25px;
  height: 25px;
  padding: 5px;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;

export const ImagePlatformContainer = styled.div`
  position: absolute;
  background-color: ${colors.BLACK};
  border-top-left-radius: 15px;
`;

export const CardBlock = styled.div`
  z-index: 3;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  top: 0;
  left: 0;
  border-radius: 15px;
  background-color: ${colors.BLACK};
  box-shadow: 0px 0px 10px 0px ${colors.PURPURE};
  height: 380px;
  width: 260px;
`;

export const CardBackBlock = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.BLACK};
  box-shadow: 0px 0px 10px 0px ${colors.PURPURE};
  height: 380px;
  width: 260px;
`;

export const GameDescription = styled.div`
  padding: 0px 20px;
  font-size: 18px;
  display: flex;
  color: ${colors.WHITE};
  align-items: center;
  text-align: center;
  align-self: center;
  height: 60%;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 368px) {
    font-size: 12px;
  }
`;

export const AgeRestrictions = styled.h2`
  color: ${colors.WHITE};
  text-align: center;
  height: 10%;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 368px) {
    font-size: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonPosition = styled.div`
  width: 50%;
`;

export const StarContainer = styled.div`
  margin-left: 10px;
`;

export const StarImage = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
`;

export const ModalLink = styled(Link)`
  text-decoration: none;
`;
