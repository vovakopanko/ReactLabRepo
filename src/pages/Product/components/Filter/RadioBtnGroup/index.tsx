import RadioBtn from "@/components/ui/atoms/RadioBtn";
import { FlexContainer } from "@/pages/Product/styles";
import { ChangeEvent } from "react";

type Props = {
  radioButtons: {
    title: string;
    value: string;
  }[];
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  currentValue: string;
};

const RadioBtnGroup = ({ radioButtons, onChange, currentValue }: Props) => {
  return (
    <FlexContainer>
      {radioButtons.map((input) => (
        <RadioBtn
          key={input.value}
          value={input.value}
          title={input.title}
          onChange={onChange}
          checked={input.value === currentValue}
        />
      ))}
    </FlexContainer>
  );
};

export default RadioBtnGroup;
