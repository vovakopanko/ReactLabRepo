import { SectionHeader } from "@/components/ui";
import { ChangeEvent, useState } from "react";
import {
  FlexContainer,
  RadioField,
  RadioFieldTitle,
  SelectionRadioFields,
} from "../../../../../pages/Product/styles";

export default function Genres() {
  const [value, setValue] = useState("All genres");

  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return (
    <FlexContainer>
      <SectionHeader name="Genres" />
      <SelectionRadioFields>
        <RadioField>
          <input
            type={"radio"}
            value={"All genres"}
            onChange={changeValue}
            checked={value == "All genres" ? true : false}
          />
          <RadioFieldTitle>All genres</RadioFieldTitle>
        </RadioField>
        <RadioField>
          <input
            type={"radio"}
            value={"Shooter"}
            onChange={changeValue}
            checked={value == "Shooter" ? true : false}
          />
          <RadioFieldTitle>Shooter</RadioFieldTitle>
        </RadioField>
        <RadioField>
          <input
            type={"radio"}
            value={"Action"}
            onChange={changeValue}
            checked={value == "Action" ? true : false}
          />
          <RadioFieldTitle>Action</RadioFieldTitle>
        </RadioField>
        <RadioField>
          <input
            type={"radio"}
            value={"Strategy"}
            onChange={changeValue}
            checked={value == "Strategy" ? true : false}
          />
          <RadioFieldTitle>Strategy</RadioFieldTitle>
        </RadioField>
        <RadioField>
          <input
            type={"radio"}
            value={"Sandbox"}
            onChange={changeValue}
            checked={value == "Sandbox" ? true : false}
          />
          <RadioFieldTitle>Sandbox</RadioFieldTitle>
        </RadioField>
        <RadioField>
          <input
            type={"radio"}
            value={"Simulation"}
            onChange={changeValue}
            checked={value == "Simulation" ? true : false}
          />
          <RadioFieldTitle>Simulation</RadioFieldTitle>
        </RadioField>
      </SelectionRadioFields>
    </FlexContainer>
  );
}
