import { TState } from "../../components/ui/modal/EditCardModal/ModalForm/index";
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
import uuid from "react-native-uuid";

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
  deleteGameCard(uniqueId: string) {
    try {
      return instanceMongoDB
        .delete<CardId>(AppUrls.DELETE_CARD, {
          data: {
            uniqueId,
          },
        })
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  createNewCard(
    gameName: string,
    description: string,
    image: string,
    price: number,
    genres: string,
    ageUser: number,
    imagePlatforms: ImagePlatforms[],
    stars: number
  ) {
    try {
      return instanceMongoDB
        .post<TState[]>(AppUrls.CREATE_NEW_CARD, {
          title: gameName,
          alt: gameName,
          description,
          url: image,
          amountStars: stars,
          price,
          genres,
          age: ageUser,
          imagePlatforms,
          uniqueId: uuid.v4(),
        })
        .then((response) => response.data);
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
    imagePlatforms: ImagePlatforms[],
    idCard: string
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
          uniqueId: idCard,
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
