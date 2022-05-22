type MenuItem = {
  id?: number;
  label: string;
  link: string;
  withDropdown?: boolean;
};

export const initialState = {
  menuItems: [
    { id: 0, label: "Home", link: "home" },
    { id: 1, label: "Product", link: "", withDropdown: true },
    // { id: 2, label: "About", link: "about" },
  ] as MenuItem[],
};
