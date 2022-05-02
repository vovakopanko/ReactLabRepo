import { Platform } from "@/pages/Product/constants";
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
  { id: 0, title: "PC", link: `product/${Platform.PC}` },
  { id: 1, title: "Xbox", link: `product/${Platform.XBOX}` },
  { id: 2, title: "Playstation 5", link: `product/${Platform.PLAYSTATION5}` },
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
