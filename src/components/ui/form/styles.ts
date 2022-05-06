import { colors } from "../../../styles/palette/index";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
`;

export const TextAreaField = styled.textarea`
  display: block;
  width: 35%;
  min-width: 160px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

export const InputName = styled.label`
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

export const FieldContainer = styled.div`
  position: relative;
  justify-content: center;
  align-self: center;
`;

export const MessageError = styled.span`
  color: ${colors.PURPURE};
  width: 80%;
  padding: 5px;
`;

export const InputField = styled.input`
  width: 50%;
  min-width: 160px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

export const SecureImage = styled.img`
  position: "absolute";
  width: 20px;
  height: 20px;
`;

export const SecureContainer = styled.div`
  margin-top: -40px;
  margin-left: 160px;
  padding-bottom: 15px;
`;
