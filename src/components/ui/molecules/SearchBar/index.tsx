import { FC } from "react";
import { useState } from "react";
import SearchPanel from "../../atoms/SearchPanel";
import { SearchBlock } from "./style";

const SearchBar: FC = () => {
  const [searchData, setSearchData] = useState("Search");
  return (
    <SearchBlock>
      <SearchPanel searchData={searchData} setSearchData={setSearchData} />
    </SearchBlock>
  );
};

export default SearchBar;
