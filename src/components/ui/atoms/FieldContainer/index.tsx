import { SettingInfoBlock, SettingLabel, SettingText } from "./styles";
import { Props } from "./types";

const FieldContainer = ({ title, titleName }: Props) => {
  const titleLength = titleName.substring(0, 20);
  return (
    <SettingInfoBlock>
      <SettingLabel>{titleLength}</SettingLabel>
      <SettingText>{title && title}</SettingText>
    </SettingInfoBlock>
  );
};

export default FieldContainer;
