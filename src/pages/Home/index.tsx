import { SearchBar } from "@/components/ui";
import React from "react";
import SectionList from "./components/SectionList";
import { homeComponent } from "./constants";
import { Container } from "./style";

const Home: React.FC = () => {
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
