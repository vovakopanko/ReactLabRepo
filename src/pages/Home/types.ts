import { ReactElement } from "react";
export type ItemComponent = {
  id?: number;
  name: string;
  renderComponent: JSX.Element;
};

export type THomeComponent = {
  id: number;
  name: "Categories" | "New games";
  renderComponent: ReactElement<any, any>;
};
