import { colors } from "@/styles/palette";
import { useCallback } from "react";
import styled from "styled-components";
import { TGameCard } from "../../organisms/GameList/types";
import { StyledItem } from "./style";

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
      const onClickHandler = useCallback((item) => {
        setValue(item.title);
        alert("got product" + " " + `${item.title}`);
        setToggle(false);
      }, []);
      return (
        <StyledList toggle>
          {filteredList.map((item, index) => (
            <StyledItem
              key={index}
              danger=""
              onClick={() => onClickHandler(item)}
            >
              {item.title}
            </StyledItem>
          ))}
        </StyledList>
      );
    }

    return (
      <StyledList toggle>
        <StyledItem danger="orangered">Not Found</StyledItem>
      </StyledList>
    );
  }
  return null;
};

type PropsStyle = {
  toggle: boolean;
};

const StyledList = styled.div<PropsStyle>`
   {
    display: ${(props: PropsStyle) => (props.toggle ? "inline" : "block")};
    z-index: 20;
    position: absolute;
    top: 105px;
    width: 80%;
    border: 1px solid none;
    background: ${colors.BLACK};
    border-radius: 15px;
    padding: 15px 0px;
  }
`;

export default SearchList;
