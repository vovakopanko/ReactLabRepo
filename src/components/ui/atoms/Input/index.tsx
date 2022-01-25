import { searchAPI } from "@/api/SearchAPI";
import { FC, useEffect, useState } from "react";
import { TGameCard } from "../../organisms/GameList/types";
import ConditionalRenderList from "./ConditionalRenderList";
import { FinderContainer, StyleInput } from "./style";

const Input: FC = () => {
  const [searchData, setSearchData] = useState("");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const query = async () => {
      if (searchData) {
        const data = await searchAPI.getGameCards(`&q=${searchData}`);
        setFindArray(data);
      }
    };
    query();
  }, [searchData]);

  return (
    <FinderContainer>
      <StyleInput
        type="text"
        name="searchTerm"
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchData(e.target.value.trim());
          setToggle(true);
        }}
        // onBlur={() => setToggle(false)}
        value={searchData}
        placeholder={searchData}
      />
      <ConditionalRenderList
        value={searchData}
        list={findArray}
        setValue={setSearchData}
        toggle={toggle}
        setToggle={setToggle}
      />
    </FinderContainer>
  );
};

export default Input;
