import { TGameCard } from "../../organisms/GameList/types";

export type TInput = {
  searchData: string;
  setSearchData: (value: string) => void;
};

export type Props = {
  value: string;
  list: TGameCard[];
  setValue: (val: string) => void;
  setToggle: (val: boolean) => void;
  width: number | string;
};

export type StyledProps = {
  width: number | string;
};
