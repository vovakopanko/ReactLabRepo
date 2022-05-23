import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ModalLink } from "../../molecules/GameCard/style";
import { StyledItem, StyledList } from "./styles";
import { Props } from "./type";

type TSearchListItem = {
  title: string;
  onClick: (val: string) => void;
};

const SearchListItem = ({ title, onClick }: TSearchListItem) => {
  const onClickHandler = useCallback(() => onClick(title), [onClick, title]);
  return (
    <StyledItem danger="" onClick={onClickHandler}>
      {title}
    </StyledItem>
  );
};

const SearchList = ({ value, list, setValue, setToggle, width }: Props) => {
  const location = useLocation();

  const backgroundLocation = useMemo(
    () => ({ backgroundLocation: location }),
    [location]
  );

  const onClickHandler = useCallback((title: string) => {
    setValue(title);
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
          state={backgroundLocation}
        >
          <SearchListItem title={item.title} onClick={onClickHandler} />
        </ModalLink>
      ))}
    </StyledList>
  );
};

export default SearchList;
