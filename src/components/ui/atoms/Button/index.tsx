import { ButtonStyle, ButtonTitle } from "./style";

const Button = ({ title }: { title: string }) => {
  return (
    <ButtonStyle>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonStyle>
  );
};

export default Button;
