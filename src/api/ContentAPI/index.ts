import { instanceMongoDB } from "../Instance/index";
import { AppUrls } from "../types";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import { logoGamesT } from "@/components/ui/organisms/Footer/types";
import {
  ImagePlatforms,
  TCategory,
  CardInfo,
  CardId,
} from "@/pages/Home/components/CategoryList/types";

export const contentAPI = {
  getGameCards() {
    try {
      return instanceMongoDB
        .get<TGameCard[]>(AppUrls.GET_GAME_CARDS)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  deleteGameCard(_id: string) {
    try {
      return instanceMongoDB.delete<CardId>(AppUrls.DELETE_CARD, {
        _id,
      });
    } catch (error) {
      console.error(error);
    }
  },
  updateCardInfo(
    gameName: string,
    description: string,
    image: string,
    price: number,
    genres: string,
    ageUser: number,
    imagePlatforms: ImagePlatforms[]
  ) {
    try {
      return instanceMongoDB
        .post<CardInfo>(AppUrls.UPDATE_CARD_INFO, {
          title: gameName,
          alt: gameName,
          description,
          url: image,
          amountStars: 5,
          price,
          genres,
          age: ageUser,
          imagePlatforms,
        })
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  getLogoGames() {
    try {
      return instanceMongoDB
        .get<logoGamesT[]>(AppUrls.LOGOGAMES)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  getCategories() {
    try {
      return instanceMongoDB
        .get<TCategory[]>(AppUrls.CATEGORIES)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
