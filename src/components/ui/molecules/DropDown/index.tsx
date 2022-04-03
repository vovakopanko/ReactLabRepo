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
  { id: 0, title: "PC", link: "/category/:pc" },
  { id: 1, title: "Xbox", link: "/category/:xboxone" },
  { id: 2, title: "Playstation 5", link: "/category/:playstation5" },
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
