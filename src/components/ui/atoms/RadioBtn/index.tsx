import { ChangeEvent, FC } from "react";
import { RadioField, RadioFieldTitle } from "./styles";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value: string;
  title: string;
};

const RadioBtn: FC<Props> = ({ onChange, value, checked, title }) => {
  return (
    <RadioField>
      <input
        type={"radio"}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <RadioFieldTitle>{title}</RadioFieldTitle>
    </RadioField>
  );
};

export default RadioBtn;
