import { FC } from "react";
import { dropDownItems } from "./constants";
import {
  StyleDropDown,
  DropDownTitle,
  ContentDropDown,
  LinkItems,
  DropDownContainer,
} from "./style";
import { HeaderTitleName } from "./type";

const DropDown: FC<HeaderTitleName> = ({ item }) => {
  return (
    <DropDownContainer>
      {dropDownItems.map(({ id, link, title }) => (
        <LinkItems key={id} to={link}>
          {title}
        </LinkItems>
      ))}
      <StyleDropDown>
        <DropDownTitle>{item}</DropDownTitle>
        <ContentDropDown>
          {dropDownItems.map(({ id, link, title }) => (
            <LinkItems key={id} to={link}>
              {title}
            </LinkItems>
          ))}
        </ContentDropDown>
      </StyleDropDown>
    </DropDownContainer>
  );
};

export default DropDown;
