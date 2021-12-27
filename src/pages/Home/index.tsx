import {
  CategoryList,
  GameList,
  SearchBar,
  SectionList,
} from "@/components/ui";
import { FC } from "react";
import { Container } from "./style";

const homeComponent = [
  { id: 0, name: "Categories", renderComponent: <CategoryList /> },
  { id: 1, name: "New games", renderComponent: <GameList /> },
];

const Home: FC = () => {
  return (
    <>
      <Container>
        <SearchBar />
      </Container>
      {homeComponent.map(({ id, name, renderComponent }) => (
        <SectionList key={id} name={name} renderComponent={renderComponent} />
      ))}
    </>
  );
};

export default Home;
