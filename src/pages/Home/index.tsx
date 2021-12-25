import { CategoryList, GameList, SearchBar } from "@/components/ui";
import { FC } from "react";
import { BlurEffect, Line, Title, Container } from "./style";
import { ItemComponent } from "./types";

const homeComponent = [
  { id: 0, name: "Categories", componentName: <CategoryList /> },
  { id: 1, name: "New games", componentName: <GameList /> },
];

const ItemsComponent = ({ name, componentName }: ItemComponent) => {
  return (
    <Container>
      <BlurEffect>
        <Title>{name}</Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Line />
        </div>
        {componentName}
      </BlurEffect>
    </Container>
  );
};

const Home: FC = () => {
  return (
    <>
      <Container>
        <SearchBar />
      </Container>
      {homeComponent.map((component) => (
        <ItemsComponent
          key={component.id}
          name={component.name}
          componentName={component.componentName}
        />
      ))}
    </>
  );
};

export default Home;
