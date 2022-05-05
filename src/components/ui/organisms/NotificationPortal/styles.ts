import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.GRAY};
  padding: 30px;
  z-index: 11;
  min-width: 200px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 0px 20px 0px ${colors.PURPURE};
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const HeaderName = styled.h2`
  color: ${colors.PURPURE};
  width: 90%;
  text-align: center;
  justify-content: center;
`;

export const NotificationTitle = styled.span`
  display: flex;
  font-size: 21px;
  color: black;
  justify-content: center;
  text-align: center;
  font-style: italic;
  padding-bottom: 10px;
`;
