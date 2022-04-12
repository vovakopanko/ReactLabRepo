import { THomeComponent } from "./types";
import CategoryList from "./components/CategoryList";
import { GameList } from "@/components/ui";

export const homeComponent: THomeComponent[] = [
  { id: 0, name: "Categories", renderComponent: <CategoryList /> },
  { id: 1, name: "New games", renderComponent: <GameList /> },
];
