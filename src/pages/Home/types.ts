import { FC, ReactNode } from "react";
export type ItemComponent = {
  id?: number;
  name: string;
  RenderComponent: FC;
  children?: ReactNode;
};

export type THomeComponent = {
  id: number;
  name: "Categories" | "New games";
  renderComponent: FC;
};
