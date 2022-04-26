import { SectionHeader } from "@/components/ui";
import { setAgeFilter } from "@/redux/reducers/product";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  FlexContainer,
  RadioField,
  RadioFieldTitle,
} from "../../../../../pages/Product/styles";

export default function Age() {
  const [value, setValue] = useState("All ages");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    setSearchParams({ age: event.target.value });
    dispatch(setAgeFilter(event.target.value));
  }
  return (
    <FlexContainer>
      <SectionHeader name="Age" />
      <RadioField>
        <input
          type={"radio"}
          value={"All"}
          onChange={changeValue}
          checked={value == "All" ? true : false}
        />
        <RadioFieldTitle>All ages</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"3"}
          onChange={changeValue}
          checked={value == "3" ? true : false}
        />
        <RadioFieldTitle>3+</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"6"}
          onChange={changeValue}
          checked={value == "6" ? true : false}
        />
        <RadioFieldTitle>6+</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"12"}
          onChange={changeValue}
          checked={value == "12" ? true : false}
        />
        <RadioFieldTitle>12+</RadioFieldTitle>
      </RadioField>
      <RadioField>
        <input
          type={"radio"}
          value={"18"}
          onChange={changeValue}
          checked={value == "18" ? true : false}
        />
        <RadioFieldTitle>18+</RadioFieldTitle>
      </RadioField>
    </FlexContainer>
  );
}
