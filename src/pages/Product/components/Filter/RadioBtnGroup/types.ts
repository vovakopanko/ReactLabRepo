import { ChangeEvent } from "react";

export type Props = {
  radioButtons: {
    title: string;
    value: string;
  }[];
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string;
};
