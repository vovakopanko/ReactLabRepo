import RadioBtn from "@/components/ui/atoms/RadioBtn";
import { FlexContainer } from "@/pages/Product/styles";
import { Props } from "./types";

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
