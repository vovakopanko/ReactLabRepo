import { colors } from "@/styles/palette";
import styled from "styled-components";

const Button = ({
  title,
  color,
  width,
  func,
}: {
  title: string;
  color: any;
  width: number | string;
  func?: any;
}) => {
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

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.input`
  width: ${(props) => props.width};
  align-self: center;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  color: ${colors.WHITE};
  border: none;
  margin-top: 10px;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
