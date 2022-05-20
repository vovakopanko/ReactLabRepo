import { colors } from "@/styles/palette";
import styled from "styled-components";

export const InfoContainer = styled.div`
  min-width: 300px;
  background-color: ${colors.PURPURE};
  border-radius: 15px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  opacity: 0.91;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const BorderContainer = styled.div`
  padding: 10px;
  border-radius: 15px;
  border: 3px solid ${colors.PURPURE};
  background-color: ${colors.LIGHT_GRAY};
  opacity: 0.97;
`;

export const InfoTitle = styled.h2`
  color: ${colors.WHITE};
`;

export const PhotoInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhotoInput = styled.input`
  display: block;
  border-radius: 4px;
  border: 1px solid ${colors.WHITE};
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
`;

export const ImageContainer = styled.div`
  border-top-left-radius: 15px;
`;

export const ImagePlatform = styled.img`
  height: auto;
  max-width: 180px;
  max-height: 220px;
  border-radius: 15px;
`;

export const ProfileTitle = styled.h2`
  font-weight: 300;
  padding-left: 10px;
  color: ${colors.WHITE};
`;

export const ProfileContainer = styled.div`
  padding: 20px;
`;

export const BottomLine = styled.div`
  border-bottom: 1px solid ${colors.WHITE}; ;
`;

export const ContentBlock = styled.div`
  margin: 10px;
`;

export const ProfilePageContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const InputName = styled.label`
  line-height: 2;
  text-align: left;
  margin-bottom: 2px;
  margin-top: 5px;
  font-size: 14;
  font-weight: 300;
  color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.input`
  width: 300px;
  border-radius: 4px;
  color: ${colors.WHITE};
  border: 1px solid ${colors.WHITE};
  padding: 10px;
  font-size: 14;
  background-color: transparent;
`;
