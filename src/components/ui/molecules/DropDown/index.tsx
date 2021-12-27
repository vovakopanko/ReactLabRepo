import {
  DropDown,
  DropDownTitle,
  StyleCaretDownOutlined,
  ContentDropDown,
  LinkItems,
} from "./style";
import { dropDownItem } from "./type";

const dropDownItems: dropDownItem[] = [
  { id: 0, title: "PC", link: "/pc" },
  { id: 1, title: "Xbox", link: "/xbox" },
  { id: 2, title: "Playstation 5", link: "/ps5" },
];

const DropDownContainer = ({ item }: { item: string }) => {
  return (
    <>
      {dropDownItems.map(({ id, link, title }) => (
        <LinkItems key={id} to={link}>
          {title}
        </LinkItems>
      ))}
      <DropDown>
        <DropDownTitle>{item}</DropDownTitle>
        <StyleCaretDownOutlined />
        <ContentDropDown>
          {dropDownItems.map(({ id, link, title }) => (
            <LinkItems key={id} to={link}>
              {title}
            </LinkItems>
          ))}
        </ContentDropDown>
      </DropDown>
    </>
  );
};

export default DropDownContainer;
