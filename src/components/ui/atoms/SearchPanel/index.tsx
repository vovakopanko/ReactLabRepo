import { FC } from "react";
import { Input } from "./style";

type TInput = {
  searchData: string;
  setSearchData: (value: string) => void;
};

const SearchPanel: FC<TInput> = ({ searchData, setSearchData }) => (
  <Input
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Your data: ", searchData);
      return setSearchData(e.target.value);
    }}
    placeholder={searchData}
  />
);

export default SearchPanel;
