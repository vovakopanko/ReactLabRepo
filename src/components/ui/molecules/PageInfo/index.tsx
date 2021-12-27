import { Title, Container } from "./style";

export const PageContainerInfo = ({ pageInfo }: { pageInfo: string }) => {
  return (
    <Container>
      <Title>{pageInfo}</Title>
    </Container>
  );
};
