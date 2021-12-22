import { colors } from "@/styles/palette";
import { FC } from "react";
import styled from "styled-components";

const Registration: FC = () => {
  return (
    <div>
      <Container>
        <Title>Soon there will be content for Registration</Title>
      </Container>
      <div>
        <Title>Login:</Title>
      </div>
      <div>
        <Title>Password:</Title>
      </div>
    </div>
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

export default Registration;
