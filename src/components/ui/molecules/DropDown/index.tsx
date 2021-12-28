import { FC } from "react";
import {
  StyleDropDown,
  DropDownTitle,
  StyleCaretDownOutlined,
  ContentDropDown,
  LinkItems,
} from "./style";
import { dropDownItem, HeaderTitleName } from "./type";

const dropDownItems: dropDownItem[] = [
  { id: 0, title: "PC", link: "/pc" },
  { id: 1, title: "Xbox", link: "/xbox" },
  { id: 2, title: "Playstation 5", link: "/ps5" },
];

const DropDown: FC<HeaderTitleName> = ({ item }) => {
  return (
    <>
      {dropDownItems.map(({ id, link, title }) => (
        <LinkItems key={id} to={link}>
          {title}
        </LinkItems>
      ))}
      <StyleDropDown>
        <DropDownTitle>{item}</DropDownTitle>
        <StyleCaretDownOutlined />
        <ContentDropDown>
          {dropDownItems.map(({ id, link, title }) => (
            <LinkItems key={id} to={link}>
              {title}
            </LinkItems>
          ))}
        </ContentDropDown>
      </StyleDropDown>
    </>
  );
};

export default DropDown;
