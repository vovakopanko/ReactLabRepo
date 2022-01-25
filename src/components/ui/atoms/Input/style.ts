import { colors } from "@/styles/palette";
import styled from "styled-components";

export const StyleInput = styled.input`
  color: ${colors.WHITE};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
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

export const StyledList = styled.div`
   {
    z-index: 20;
    position: absolute;
    top: 105px;
    width: 80%;
    border: 1px solid none;
    background: ${colors.BLACK};
    border-radius: 15px;
    padding: 15px 0px;
  }
`;

export const StyledItem = styled.div`
  padding: 0.25;
  color: ${({ danger }: { danger: string }) => danger || "#fff"};
  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;
  padding-left: 10px;
  margin: 2px;

  &:hover {
    background: ${({ danger }) => (danger ? "transparent" : colors.RED)};
    cursor: ${({ danger }) => danger || "pointer"};
  }
`;
