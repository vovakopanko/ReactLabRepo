import { useLocation } from "react-router-dom";
import { ModalLink } from "../../molecules/GameCard/style";
import { TGameCard } from "../../organisms/GameList/types";
import { StyledItem, StyledList } from "./styles";
import { Props } from "./type";

const SearchList = ({ value, list, setValue, setToggle, width }: Props) => {
  if (value) {
    const location = useLocation();
    const filteredList = list.filter((item) =>
      item.title.toString().toLowerCase().startsWith(value.toLowerCase())
    );

    if (filteredList.length) {
      const onClickHandler = (item: TGameCard) => {
        setValue(item.title);
        setToggle(false);
        setValue("");
      };

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
    }

    return (
      <StyledList width={width}>
        <StyledItem danger="orangered">Not Found</StyledItem>
      </StyledList>
    );
  }
  return null;
};

export default SearchList;
