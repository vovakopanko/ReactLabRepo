export type MenuItems = {
  id?: number;
  label: string;
  link: string;
  onClick?: () => void;
  selected?: boolean;
  withDropdown?: boolean;
};
