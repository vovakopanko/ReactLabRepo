import { FC } from "react";
import {
  StyleDropDown,
  DropDownTitle,
  ContentDropDown,
  LinkItems,
  DropDownContainer,
} from "./style";
import { dropDownItem, HeaderTitleName } from "./type";

const dropDownItems: dropDownItem[] = [
  { id: 0, title: "PC", link: "pc" },
  { id: 1, title: "Xbox", link: "xboxone" },
  { id: 2, title: "Playstation 5", link: "playstation5" },
];

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
