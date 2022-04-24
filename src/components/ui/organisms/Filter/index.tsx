import { FilterBlock, FilterContainer } from "../../../../pages/Product/styles";
import { Props } from "../../../../pages/Product/types";
import Age from "./Age";
import Genres from "./Genres";
import Sort from "./Sort";

const Filter = ({ pageInfo }: Props) => {
  return (
    <FilterContainer>
      <FilterBlock>
        <Sort pageInfo={pageInfo} />
        <Genres />
        <Age />
      </FilterBlock>
    </FilterContainer>
  );
};

export default Filter;
