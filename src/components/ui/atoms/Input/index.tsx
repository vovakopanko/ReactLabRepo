import { searchAPI } from "@/api/SearchAPI";
import { FC, useEffect, useState } from "react";
import { StyledNavLink, StyleItem } from "../../molecules/MenuItem/styles";
import { TGameCard } from "../../organisms/GameList/types";
import { DropDownFinder, FinderContainer, StyleInput } from "./style";

const Input: FC = () => {
  const [searchData, setSearchData] = useState("Search");
  const [findArray, setFindArray] = useState<TGameCard[]>([]);

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          return setSearchData(e.target.value.trim());
        }}
        placeholder={searchData}
      />
      <DropDownFinder>
        {findArray.map((a: TGameCard, index: number) => (
          <StyledNavLink
            key={index}
            to={a.title}
            onClick={() => alert("got product" + " " + `${a.title}`)}
          >
            <StyleItem>{a.title}</StyleItem>
          </StyledNavLink>
        ))}
      </DropDownFinder>
    </FinderContainer>
  );
};

export default Input;
