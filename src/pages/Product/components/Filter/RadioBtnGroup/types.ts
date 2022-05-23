import { ChangeEvent } from "react";

type RadioButton = {
  title: string;
  value: string;
};

export type Props = {
  radioButtons: RadioButton[];
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string;
};
