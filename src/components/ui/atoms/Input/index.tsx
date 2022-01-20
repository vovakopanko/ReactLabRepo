import { FC } from "react";
import { StyleInput } from "./style";
import { TInput } from "./type";

const Input: FC<TInput> = ({ searchData, setSearchData }) => (
  <StyleInput
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      return setSearchData(e.target.value);
    }}
    placeholder={searchData}
  />
);

export default Input;
