import { ChangeEvent } from "react";

export type Props = {
  title: string;
  value: string | number;
  array: { titleName: string; value: string }[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
