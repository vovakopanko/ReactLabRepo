import { colors } from "../../../styles/palette/index";
import styled from "styled-components";

type StyledProps = {
  isDisplayEye: boolean;
};

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 320px;
`;

export const TextAreaField = styled.textarea`
  display: block;
  width: 35%;
  min-width: 160px;
  height: 80px;
  border-radius: 4px;
  margin-left: 10px;
  border: 1px solid ${colors.WHITE};
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14;
  @media (max-width: 768px) {
    min-width: 140px;
  }
`;

export const InputName = styled.label`
  padding-left: 20px;
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
    padding-left: 10px;
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
  min-width: 138px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid ${colors.WHITE};
  padding: 10px;
  padding-right: 30px;
  margin-bottom: 10px;
  font-size: 14;
  @media (max-width: 768px) {
    min-width: 118px;
    padding-right: 36px;
  }
`;

export const SecureImage = styled.img`
  position: "absolute";
  width: 20px;
  height: 20px;
`;

export const SecureContainer = styled.div<StyledProps>`
  margin-top: -40px;
  margin-left: 162px;
  padding-bottom: 15px;
  visibility: ${(props) => (props.isDisplayEye ? "visible" : "hidden")};
  @media (max-width: 768px) {
    margin-left: 150px;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 320px;
`;

export const SelectedContainer = styled.select`
  min-width: 180px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${colors.WHITE};
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 14;
  @media (max-width: 768px) {
    min-width: 160px;
  }
`;

export const CheckedTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
  width: 50%;
`;

export const CheckedContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  width: 100%;
`;

export const CheckedTitle = styled.span`
  font-size: 14;
  line-height: 2;
  font-weight: 700;
  color: ${colors.BLACK};
  width: 50%;
`;

export const CheckedContent = styled.div`
  width: 50%;
`;

export const CheckBoxTitle = styled.span`
  color: ${colors.BLACK};
  font-size: 18px;
`;

export const CheckBoxContent = styled.div`
  display: flex;
  padding-bottom: 5px;
`;
