import {
  SelectedContainer,
  SortContainer,
  SortTitle,
} from "@/pages/Product/styles";
import { Props } from "./types";

const SelectedBtnGroup = ({ title, value, array, handleChange }: Props) => {
  return (
    <SortContainer>
      <SortTitle>{title}</SortTitle>
      <SelectedContainer value={value} onChange={handleChange}>
        {array.map((option) => (
          <option value={option.value} key={option.titleName}>
            {option.titleName}
          </option>
        ))}
      </SelectedContainer>
    </SortContainer>
  );
};

export default SelectedBtnGroup;
