import { SettingInfoBlock, SettingLabel, SettingText } from "./styles";
import { Props } from "./types";

const FieldContainer = ({ title, titleName, index, lastIndex }: Props) => {
  return (
    <SettingInfoBlock lastIndex={lastIndex} index={index}>
      <SettingLabel>{titleName}</SettingLabel>
      <SettingText>{title && title}</SettingText>
    </SettingInfoBlock>
  );
};

export default FieldContainer;
