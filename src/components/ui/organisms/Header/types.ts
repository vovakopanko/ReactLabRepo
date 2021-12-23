export type MenuItem = {
  id?: number;
  item: string;
  link: string;
  onClick?: () => void;
  selected?: boolean;
  withDropdown?: boolean;
};

export type dropDownItem = {
  id: number;
  title: string;
  link: string;
};
