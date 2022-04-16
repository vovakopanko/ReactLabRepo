import { colors } from "@/styles/palette";
import styled from "styled-components";

export type FieldType = {
  id?: number;
  title: string | number;
  titleName: string;
};

export type Props = {
  id?: number;
  title: string | number;
  titleName: string;
  index: number;
  lastIndex: number;
};

const FieldContainer = ({ title, titleName, index, lastIndex }: Props) => {
  return (
    <SettingInfoBlock lastIndex={lastIndex} index={index}>
      {title && <SettingLabel>{titleName}</SettingLabel>}
      <SettingText>{" " + title}</SettingText>
    </SettingInfoBlock>
  );
};

export const SettingInfoBlock = styled.div`
  display: flex;
  align-items: "center";
  flex-direction: "row";
  border-bottom: ${({
    lastIndex,
    index,
  }: {
    lastIndex: number;
    index: number;
  }) => (lastIndex !== index ? `1px solid ${colors.BLACK}` : null)};
`;

export const SettingLabel = styled.p`
  width: 50%;
  color: ${colors.GRAY};
  font-size: 18px;
  padding-left: 5px;
`;

export const SettingText = styled.span`
  text-align: right;
  align-self: center;
  width: 50%;
  color: ${colors.BLACK};
  font-size: 20px;
`;

export default FieldContainer;
