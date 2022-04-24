import { SectionHeader } from "@/components/ui";
import { ChangeEvent, useState } from "react";
import {
  FlexContainer,
  RadioField,
  RadioFieldTitle,
} from "../../../../../pages/Product/styles";

export default function Age() {
  const [value, setValue] = useState("All ages");

  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return (
    <FlexContainer>
      <SectionHeader name="Age" />
      <RadioField>
        <input
          type={"radio"}
          value={"A"}
          onChange={changeValue}
          checked={value == "All ages" ? true : false}
        />
        <RadioFieldTitle>All ages</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"3+"}
          onChange={changeValue}
          checked={value == "3+" ? true : false}
        />
        <RadioFieldTitle>3+</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"6+"}
          onChange={changeValue}
          checked={value == "6+" ? true : false}
        />
        <RadioFieldTitle>6+</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"12+"}
          onChange={changeValue}
          checked={value == "12+" ? true : false}
        />
        <RadioFieldTitle>12+</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"18+"}
          onChange={changeValue}
          checked={value == "18+" ? true : false}
        />
        <RadioFieldTitle>18+</RadioFieldTitle>
      </RadioField>
    </FlexContainer>
  );
}
