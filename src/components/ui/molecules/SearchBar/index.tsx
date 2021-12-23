import { Input, SearchBlock } from "./style";

const SearchBar = () => {
  return (
    <SearchBlock>
      <Input onClick={() => alert("got product")} placeholder={"Search"} />
    </SearchBlock>
  );
};

export default SearchBar;
