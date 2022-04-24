import { debouncedFetchData } from "@/api/SearchAPI";
import { useCallback, useEffect, useState } from "react";
import { TGameCard } from "../../organisms/GameList/types";
import SearchList from "./SearchList";
import { FinderContainer, StyleInput } from "./styles";

const Input = ({ width = "80%" }: { width?: number | string }) => {
  const [searchData, setSearchData] = useState("");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    debouncedFetchData(searchData, (res: TGameCard[]) => {
      setFindArray(res);
    });
  }, [searchData]);

  const OnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  };

  const onFocus = useCallback(() => setIsFocus(true), []);
  const onChange = useCallback((e) => OnChangeData(e), []);

  return (
    <FinderContainer>
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
      <SearchList
        width={width}
        value={searchData}
        list={findArray}
        setValue={setSearchData}
        setToggle={setIsFocus}
      />
    </FinderContainer>
  );
};

export default Input;
