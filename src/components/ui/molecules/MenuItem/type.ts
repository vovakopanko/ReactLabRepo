export type MenuItem = {
  id?: number;
  label: string;
  link: string;
  onClick?: () => void;
  selected?: boolean;
  withDropdown?: boolean;
};
