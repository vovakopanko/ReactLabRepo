import { SearchBar } from "@/components/ui";
import React from "react";
import SectionList from "./components/SectionList";
import { homeComponent } from "./constants";
import { Container } from "./style";
import { THomeComponent } from "./types";

const Home: React.FC<THomeComponent> = () => {
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
