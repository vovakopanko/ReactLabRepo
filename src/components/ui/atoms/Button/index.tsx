import { ButtonStyle, Title } from "./style";

const Button = ({ title }: { title: string }) => {
  return (
    <ButtonStyle>
      <Title>{title}</Title>
    </ButtonStyle>
  );
};

export default Button;
