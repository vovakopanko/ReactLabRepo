import { Container } from "./../../atoms/style";
import { colors } from "@/styles/palette";
import styled from "styled-components";

export const GamesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;

export const Span = styled.span`
  font-size: 15px;
  color: ${colors.WHITE};
  padding-bottom: 5px;
`;

export const PriseBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: 80%;
  border-top-right-radius: 15px;
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
  position: absolute;
  transform: rotateY(0deg);

  top: 0;
  left: 0;

  border: 5px solid ${colors.LIGHT_GRAY};
  border-radius: 15px;
  background-color: ${colors.LIGHT_GRAY};

  height: 40vh;
  width: 30vh;
`;

export const CardBackBlock = styled.div`
  padding: 20px;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  border: 5px solid ${colors.RED};
  border-radius: 15px;
  background-color: ${colors.BLACK};

  height: 40vh;
  width: 30vh;
`;

export const GameDescription = styled.div`
  font-size: 21px;
  display: flex;
  color: ${colors.WHITE};
  align-items: center;
  text-align: center;
  height: 70%;
`;

export const AgeRestrictions = styled.h2`
  color: ${colors.WHITE};
  text-align: center;
  height: 10%;
`;

export const Button = styled.button`
  font-size: 250;
  width: 200px;
  align-self: center;
  height: 40px;
  border-radius: 15px;
  background-color: ${colors.RED};
  color: ${colors.WHITE};
`;
