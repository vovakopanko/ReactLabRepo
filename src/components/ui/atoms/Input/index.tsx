import useOnFocusElement from "@/hooks/handlers/useOnFocusSearchBar";
import useSearchGameCards from "@/hooks/handlers/useSearchGameCards";
import { useCallback, useDeferredValue, useRef, useState } from "react";
import SearchList from "./SearchList";
import { FinderContainer, StyleInput } from "./styles";

const SearchBar = ({ width = "80%" }: { width?: number | string }) => {
  const [searchData, setSearchData] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const { onFocus, isFocus, setIsFocus } = useOnFocusElement({
    ref,
  });

  const { gamesCards } = useSearchGameCards({
    searchData,
    pageInfo: "",
    age: "All",
    genres: "All",
    criteria: "default",
    type: "default",
  });

  const deferredGameCards = useDeferredValue(gamesCards);

  const onChangeData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  }, []);

  return (
    <FinderContainer ref={ref}>
      <StyleInput
        type="text"
        name="searchTerm"
        autoComplete="off"
        onFocus={onFocus}
        onChange={onChangeData}
        value={searchData}
      />
      {isFocus && (
        <SearchList
          width={width}
          value={searchData}
          list={deferredGameCards}
          setValue={setSearchData}
          setToggle={setIsFocus}
        />
      )}
    </FinderContainer>
  );
};

export default SearchBar;
