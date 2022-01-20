import { FC } from "react";
import SearchPanel from "../../atoms/Input";
import { SearchBlock } from "./style";

const SearchBar: FC = () => {
  return (
    <SearchBlock>
      <SearchPanel />
    </SearchBlock>
  );
};

export default SearchBar;
