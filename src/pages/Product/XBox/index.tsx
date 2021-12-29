import { colors } from "@/styles/palette";
import { FC } from "react";
import styled from "styled-components";

const XBox: FC = () => {
  return (
    <Container>
      <Title>Soon there will be content for XBox</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Title = styled.span`
  color: ${colors.WHITE};
  text-align: center;
`;

export default XBox;
