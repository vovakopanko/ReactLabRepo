import { colors } from "@/styles/palette";
import { useCallback } from "react";
import styled from "styled-components";
import { TGameCard } from "../../organisms/GameList/types";
import { StyledItem } from "./styles";

type Props = {
  value: string;
  list: TGameCard[];
  setValue: (val: string) => void;
  setToggle: (val: boolean) => void;
  width: number | string;
};

type StyledProps = {
  width: number | string;
};

const SearchList = ({ value, list, setValue, setToggle, width }: Props) => {
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
        <StyledList width={width}>
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
      <StyledList width={width}>
        <StyledItem danger="orangered">Not Found</StyledItem>
      </StyledList>
    );
  }
  return null;
};

const StyledList = styled.div<StyledProps>`
   {
    width: ${(props) => props.width};
    z-index: 2;
    position: absolute;
    margin-top: 38px;
    border: 1px solid none;
    background: ${colors.LIGHT_GRAY};
    border-radius: 15px;
    padding: 15px 0px;
  }
`;

export default SearchList;
