import { useState } from "react";
import { CheckBoxContent, CheckBoxTitle } from "../styles";

type Props = {
  checkbox: { value: string; titleName: string };
  isChecked: boolean;
};

const InputCheckBox = ({ checkbox, isChecked }: Props) => {
  const [check, setCheck] = useState(isChecked);
  return (
    <CheckBoxContent>
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!check);
        }}
        checked={check}
      />
      <CheckBoxTitle>{checkbox.value}</CheckBoxTitle>
    </CheckBoxContent>
  );
};

export default InputCheckBox;
