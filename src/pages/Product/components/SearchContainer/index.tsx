import { SearchBar } from "@/components/ui";
import { Container } from "@/pages/Home/style";
import { SearchBarContainer } from "../../styles";

const SearchContainer = () => {
  return (
    <SearchBarContainer>
      <Container>
        <SearchBar />
      </Container>
    </SearchBarContainer>
  );
};

export default SearchContainer;
