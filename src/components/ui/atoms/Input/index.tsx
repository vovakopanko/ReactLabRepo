import { searchAPI } from "@/api/SearchAPI";
import { debounce } from "lodash";
import { FC, useEffect, useState } from "react";
import { TGameCard } from "../../organisms/GameList/types";
import ConditionalRenderList from "./ConditionalRenderList";
import { FinderContainer, StyleInput } from "./style";

const fetchData = async (query: string, cb: (val: TGameCard[]) => void) => {
  const res = await searchAPI.getGameCards(`&q=${query}`);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 300);

const Input: FC = () => {
  const [searchData, setSearchData] = useState("");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    debouncedFetchData(searchData, (res: TGameCard[]) => setFindArray(res));
  }, [searchData]);

  return (
    <FinderContainer>
      <StyleInput
        type="text"
        name="searchTerm"
        autoComplete="off"
        onFocus={() => {
          setIsFocus(true);
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchData(e.target.value.trim());
          setIsFocus(true);
        }}
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
