import { useCallback } from "react";
import styled from "styled-components";
import { StyledItem } from "./styles";
import { Props, StyledProps } from "./type";

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
        setValue("");
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
    backdrop-filter: blur(10px) grayscale(0.5);
    z-index: 2;
    position: absolute;
    margin-top: 38px;
    border: 1px solid none;
    border-radius: 15px;
    padding: 15px 0px;
  }
`;

export default SearchList;
