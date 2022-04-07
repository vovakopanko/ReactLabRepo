import { instanceMongoDB } from "./../Instance/index";
import { AppUrls } from "../types";
import { TGameCard } from "@/components/ui/organisms/GameList/types";

export const contentAPI = {
  getGameCards() {
    try {
      return instanceMongoDB
        .get<TGameCard[]>(AppUrls.GET_GAME_CARDS)
        .then((Response) => Response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
