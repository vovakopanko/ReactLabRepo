import { colors } from "./../../../../styles/palette/index";
import styled from "styled-components";

export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  @media (max-width: 768px) {
  }
`;

export const SortTitle = styled.span`
  text-align: center;
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 2px;
  margin-top: 5px;
  font-size: 14;
  font-weight: 700;
  color: ${colors.BLACK};
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 16px;
  }
`;

export const SelectedContainer = styled.select`
  /* display: block; */
  /* width: 50%; */
  min-width: 180px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
  @media (max-width: 768px) {
    min-width: 140px;
  }
`;
