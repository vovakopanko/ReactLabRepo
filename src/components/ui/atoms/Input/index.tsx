import { debouncedFetchData } from "@/api/SearchAPI";
import { useCallback, useEffect, useRef, useState } from "react";
import { TGameCard } from "../../organisms/GameList/types";
import SearchList from "./SearchList";
import { FinderContainer, StyleInput } from "./styles";

const SearchBar = ({ width = "80%" }: { width?: number | string }) => {
  const [searchData, setSearchData] = useState("");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    debouncedFetchData(searchData, (res: TGameCard[]) => {
      setFindArray(res);
    });
  }, [searchData]);

  useEffect(() => {
    if (isFocus) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [isFocus]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!event.target) {
        return;
      }
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        setIsFocus((prev) => !prev);
      }
    },
    [isFocus]
  );

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  };

  const onFocus = useCallback(() => setIsFocus(true), []);
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
