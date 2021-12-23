import { CategoryList, GameList, SearchBar } from "@/components/ui";
import { FC } from "react";
import { BlurEffect, Line, Title } from "./style";
import { ItemComponent } from "./types";

const homeComponent = [
  { id: 0, name: "Categories", componentName: <CategoryList /> },
  { id: 1, name: "New games", componentName: <GameList /> },
];

const ItemsComponent = ({ name, componentName }: ItemComponent) => {
  return (
    <BlurEffect>
      <Title>{name}</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Line />
      </div>
      {componentName}
    </BlurEffect>
  );
};

const Home: FC = () => {
  return (
    <>
      <SearchBar />
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
