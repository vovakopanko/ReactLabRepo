import { colors } from "@/styles/palette";
import styled from "styled-components";

export const GamesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
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
`;

export const ImagePlatform = styled.img`
  width: 25px;
  height: 25px;
  padding: 5px;
`;

export const ImagePlatformContainer = styled.div`
  position: absolute;
  background-color: ${colors.BLACK};
  border-top-left-radius: 15px;
`;

export const FlipContainer = styled.div`
  perspective: 1000px;
  height: 40vh;
  width: 30vh;
`;

export const Flipper = styled.div`
  &:hover {
    transform: rotateY(180deg);
  }
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
`;

export const GameDescription = styled.div`
  padding: 0px 20px;
  font-size: 16px;
  display: flex;
  color: ${colors.WHITE};
  align-items: center;
  text-align: center;
  height: 60%;
`;

export const AgeRestrictions = styled.h2`
  color: ${colors.WHITE};
  text-align: center;
  height: 10%;
`;

export const StarContainer = styled.div`
  margin-left: 10;
`;
