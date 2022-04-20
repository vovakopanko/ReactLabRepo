import { ButtonBlock, ButtonContainer } from "./styles";
import { Props } from "./types";

const OnClick = ({ title, color, width, func }: Props) => {
  return (
    <ButtonBlock>
      <ButtonContainer
        type={"button"}
        onClick={func}
        value={title}
        color={color}
        width={width + "px"}
      />
    </ButtonBlock>
  );
};

export default OnClick;
