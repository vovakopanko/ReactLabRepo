import styled from "styled-components";
import { colors } from "../../../../styles/palette/index";

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
  font-weight: bold;
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
  font-weight: bold;
  @media (max-width: 768px) {
    align-self: center;
    align-items: center;
  }
`;

export const InfoTitle = styled.div`
  color: ${colors.BLACK};
  text-align: center;
  font-size: 21px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const SubtitleInfo = styled.span`
  font-weight: 100;
  font-style: "italic";
  padding-bottom: 10px;
`;

export const Subtitle = styled.span`
  font-weight: 100;
  font-style: "italic";
`;
