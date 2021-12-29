import { FC } from "react";
import { Title, Container } from "./style";

export const PageContainerInfo: FC<{ pageInfo: string }> = ({ pageInfo }) => {
  return (
    <Container>
      <Title>{pageInfo}</Title>
    </Container>
  );
};
