import { debouncedFetchData } from "@/api/SearchAPI";
import { FC, useCallback, useEffect, useState } from "react";
import { TGameCard } from "../../organisms/GameList/types";
import ConditionalRenderList from "./SearchList";
import { FinderContainer, StyleInput } from "./style";

const Input: FC = () => {
  const [searchData, setSearchData] = useState("");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    debouncedFetchData(searchData, (res: TGameCard[]) => setFindArray(res));
  }, [searchData]);

  const OnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
    setIsFocus(true);
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
      <ConditionalRenderList
        value={searchData}
        list={findArray}
        setValue={setSearchData}
        toggle={isFocus}
        setToggle={setIsFocus}
      />
    </FinderContainer>
  );
};

export default Input;
