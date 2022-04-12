import { TGameCard } from "../../organisms/GameList/types";
import { StyledItem, StyledList } from "./style";

type Props = {
  value: string;
  list: TGameCard[];
  setValue: (val: string) => void;
  toggle: any;
  setToggle: (val: boolean) => void;
};

const SearchList = ({ value, list, setValue, toggle, setToggle }: Props) => {
  if (value) {
    const filteredList = list.filter((item) =>
      item.title.toString().toLowerCase().startsWith(value.toLowerCase())
    );

    if (filteredList.length) {
      return (
        toggle && (
          <StyledList>
            {filteredList.map((item, index) => (
              <StyledItem
                key={index}
                danger=""
                onClick={() => {
                  setValue(item.title);
                  alert("got product" + " " + `${item.title}`);
                  setToggle(false);
                }}
              >
                {item.title}
              </StyledItem>
            ))}
          </StyledList>
        )
      );
    }

    return (
      <StyledList>
        <StyledItem danger="orangered">Not Found</StyledItem>
      </StyledList>
    );
  }
  return null;
};

export default SearchList;
