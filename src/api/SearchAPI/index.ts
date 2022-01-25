import { TGameCard } from "../../components/ui/organisms/GameList/types";
import { instance } from "../Instance";

export const searchAPI = {
  getGameCards(filter: string) {
    return instance
      .get<TGameCard[]>(`gameCards?_sort=amountStars&_order=desc` + `${filter}`)
      .then((Response) => Response.data);
  },
};
