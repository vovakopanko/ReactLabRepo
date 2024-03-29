import { ButtonBlock, ButtonContainer } from "./styles";
import { Props } from "./types";

const Button = ({
  title,
  width,
  onClick,
  type = "primary",
  disabled,
  id,
}: Props) => {
  return (
    <ButtonBlock>
      <ButtonContainer
        type={"button"}
        onClick={onClick}
        value={title}
        width={width + "px"}
        buttonType={type}
        disabled={disabled}
        data-testid={id}
      />
    </ButtonBlock>
  );
};

export default Button;
