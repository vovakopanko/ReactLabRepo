import { colors } from "@/styles/palette";
import { ChangeEvent, FC } from "react";
import styled from "styled-components";

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

export const RadioFieldTitle = styled.span`
  color: ${colors.WHITE};
  font-size: 20px;
  padding-left: 5px;
`;

export const SelectionRadioFields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioField = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
`;

export default RadioBtn;
