import { colors } from "@/styles/palette";
import styled from "styled-components";

type Flipper = {
  focused: boolean;
};

export const GamesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const PriseBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  @media (max-width: 1368px) {
  }
  @media (max-width: 768px) {
  }
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

export const FlipContainer = styled.div`
  perspective: 1000px;
  margin: 10px;
  height: 40vh;
  width: 30vh;
  margin-bottom: 15px;
  @media (max-width: 1368px) {
  }
  @media (max-width: 1200px) {
    padding: 10px 0px;
  }
  @media (max-width: 768px) {
    padding: 10px 0px;
    height: 50vh;
    width: 30vh;
  }
`;

export const Flipper = styled.div<Flipper>`
  transform: ${({ focused }) => (focused ? "rotateY(180deg)" : "none")};
  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;
`;

export const CardBlock = styled.div`
  z-index: 3;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  top: 0;
  left: 0;
  border-radius: 15px;
  background-color: ${colors.BLACK};
  box-shadow: 0px 0px 10px 0px ${colors.RED};
  height: 40vh;
  width: 30vh;
  @media (max-width: 768px) {
    height: 50vh;
    width: 30vh;
  }
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
  box-shadow: 0px 0px 10px 0px ${colors.RED};
  height: 40vh;
  width: 30vh;
  @media (max-width: 768px) {
    height: 50vh;
    width: 30vh;
  }
`;

export const GameDescription = styled.div`
  padding: 0px 20px;
  font-size: 18px;
  display: flex;
  color: ${colors.WHITE};
  align-items: center;
  text-align: center;
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

export const StarContainer = styled.div`
  margin-left: 10px;
`;
