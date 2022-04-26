import { SectionHeader } from "@/components/ui";
import { Props } from "@/pages/Product/types";
import { setCriteriaFilter, setTypeFilter } from "@/redux/reducers/product";
import { selectFilters } from "@/redux/selectors/authSelector";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductName,
  FlexContainer,
  SortTitle,
  SortContainer,
  SelectedContainer,
} from "../../../../../pages/Product/styles";

const Sort = ({ pageInfo }: Props) => {
  const [criteria, setCriteria] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  function handleChangeCriteria(event: ChangeEvent<HTMLSelectElement>) {
    setCriteria(event.target.value);
    dispatch(setCriteriaFilter(event.target.value));
  }
  function handleChangeType(event: ChangeEvent<HTMLSelectElement>) {
    setType(event.target.value);
    dispatch(setTypeFilter(event.target.value));
  }

  return (
    <FlexContainer>
      <ProductName>{pageInfo.toLocaleUpperCase()}</ProductName>
      <SectionHeader name="Sort" />
      <SortContainer>
        <SortTitle>Criteria</SortTitle>
        <SelectedContainer value={criteria} onChange={handleChangeCriteria}>
          <option value="" disabled>
            Choose a ...
          </option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="age">Age</option>
        </SelectedContainer>
      </SortContainer>
      <SortContainer>
        <SortTitle>Type</SortTitle>
        <SelectedContainer value={type} onChange={handleChangeType}>
          <option value="" disabled>
            Choose a ...
          </option>
          <option value="ascending">Ascending</option>
          <option value="decreasing">Decreasing</option>
        </SelectedContainer>
      </SortContainer>
    </FlexContainer>
  );
};

export default Sort;
