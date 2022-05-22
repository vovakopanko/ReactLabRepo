import { debouncedFetchData } from "@/api/SearchAPI";
import useOnFocusElement from "@/hooks/handlers/useOnFocusSearchBar";
import { useCallback, useEffect, useRef, useState } from "react";
import { TGameCard } from "../../organisms/GameList/types";
import SearchList from "./SearchList";
import { FinderContainer, StyleInput } from "./styles";

const SearchBar = ({ width = "80%" }: { width?: number | string }) => {
  const [searchData, setSearchData] = useState("");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const { onFocus, isFocus, setIsFocus } = useOnFocusElement({
    ref,
  });

  useEffect(() => {
    debouncedFetchData(searchData, (res: TGameCard[]) => {
      setFindArray(res);
    });
  }, [searchData]);

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  };

  const onChange = useCallback((e) => onChangeData(e), []);

  return (
    <FinderContainer ref={ref}>
      <StyleInput
        type="text"
        name="searchTerm"
        autoComplete="off"
        onFocus={() => {
          onFocus();
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        value={searchData}
      />
      {isFocus && (
        <SearchList
          width={width}
          value={searchData}
          list={findArray}
          setValue={setSearchData}
          setToggle={setIsFocus}
        />
      )}
    </FinderContainer>
  );
};

export default SearchBar;
