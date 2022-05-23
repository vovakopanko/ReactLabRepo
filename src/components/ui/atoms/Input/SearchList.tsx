import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ModalLink } from "../../molecules/GameCard/style";
import { TGameCard } from "../../organisms/GameList/types";
import { StyledItem, StyledList } from "./styles";
import { Props } from "./type";

const SearchList = ({ value, list, setValue, setToggle, width }: Props) => {
  const location = useLocation();

  const onClickHandler = useCallback((item: TGameCard) => {
    setValue(item.title);
    setToggle(false);
    setValue("");
  }, []);

  const filteredList = useMemo(() => {
    if (value) {
      return list.filter((item) =>
        item.title.toString().toLowerCase().startsWith(value.toLowerCase())
      );
    }
    return null;
  }, [value]);

  if (!filteredList?.length) {
    return (
      <StyledList width={width}>
        <StyledItem danger="orangered">Not Found</StyledItem>
      </StyledList>
    );
  }

  return (
    <StyledList width={width}>
      {filteredList.map((item, index) => (
        <ModalLink
          key={index}
          to={`/found/${item.title}`}
          state={{ backgroundLocation: location }}
        >
          <StyledItem danger="" onClick={() => onClickHandler(item)}>
            {item.title}
          </StyledItem>
        </ModalLink>
      ))}
    </StyledList>
  );
};

export default SearchList;
