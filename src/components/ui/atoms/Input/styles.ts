import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";
import { StyledProps } from "./type";

export const StyleInput = styled.input`
  color: ${colors.WHITE};
  position: relative;
  height: 30px;
  background-color: ${colors.BLACK};
  opacity: 0.8;
  border-radius: 15px;
  border: 2px solid ${colors.WHITE};
  padding-left: 10px;
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 320px) {
    max-width: 240px;
  }
`;

export const BlurEffect = styled.div`
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  backdrop-filter: blur(3px) grayscale(0.5);
  border-radius: 25px;
`;

export const FinderContainer = styled.div`
   {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledItem = styled.div`
  width: 70%;
  padding: 0.25;
  color: ${({ danger }: { danger: string }) => danger || "#fff"};
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  padding-left: 10px;
  margin: 15px;
  &:hover {
    width: 95%;
    padding-top: ${({ danger }) => (danger ? `0px` : `3px`)};
    padding-bottom: ${({ danger }) => (danger ? `0px` : `3px`)};
    box-shadow: ${({ danger }) =>
      danger
        ? `0px 0px 10px 0px transparent`
        : `0px 0px 10px 0px ${colors.PURPURE}`};
    cursor: ${({ danger }) => danger || "pointer"};
  }
`;

export const StyledList = styled.div<StyledProps>`
   {
    width: ${(props) => props.width};
    backdrop-filter: blur(10px) grayscale(0.5);
    z-index: 2;
    position: absolute;
    margin-top: 38px;
    border: 1px solid none;
    border-radius: 15px;
    padding: 15px 0px;
  }
`;
