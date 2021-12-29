import { ButtonContainer, Title } from "./style";

const Button = ({ title }: { title: string }) => {
  return (
    <ButtonContainer>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
