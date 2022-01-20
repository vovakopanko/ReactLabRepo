import { colors } from "@/styles/palette";
import styled from "styled-components";

export const StyleInput = styled.input`
  color: ${colors.WHITE};
  width: 95%;
  height: 30px;
  background-color: ${colors.BLACK};
  opacity: 0.8;
  border-radius: 15px;
  border: 2px solid ${colors.WHITE};
  padding-left: 10px;
`;

export const BlurEffect = styled.div`
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  backdrop-filter: blur(3px) grayscale(0.5);
  border-radius: 25px;
`;

export const DropDownFinder = styled.div`
  position: absolute;
  z-index: 5;
  margin-top: 35px;
  margin-left: 15px;
  background-color: ${colors.LIGHT_GRAY};
  width: 75%;
`;

export const FinderContainer = styled.div`
   {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
