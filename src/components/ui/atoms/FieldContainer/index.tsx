import { SettingInfoBlock, SettingLabel, SettingText } from "./styles";
import { Props } from "./types";

const FieldContainer = ({ title, titleName }: Props) => {
  return (
    <SettingInfoBlock>
      <SettingLabel>{titleName}</SettingLabel>
      <SettingText>{title && title}</SettingText>
    </SettingInfoBlock>
  );
};

export default FieldContainer;
