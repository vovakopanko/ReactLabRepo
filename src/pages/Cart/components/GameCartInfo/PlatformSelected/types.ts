import { ChangeEvent } from "react";

export type Props = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  platforms: {
    alt: string;
    id: number;
    src: string;
  }[];
};
