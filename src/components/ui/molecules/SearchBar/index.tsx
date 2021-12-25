import { useState } from "react";
import { Input, SearchBlock } from "./style";

const SearchBar = () => {
  const [searchData, setSearchData] = useState("Search");
  return (
    <SearchBlock>
      <Input
        onChange={(e) => {
          console.log("Your data: ", searchData);
          return setSearchData(e.target.value);
        }}
        placeholder={searchData}
      />
    </SearchBlock>
  );
};

export default SearchBar;
