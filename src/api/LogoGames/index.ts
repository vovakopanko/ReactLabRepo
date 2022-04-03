import { instance } from "../Instance";
import { AppUrls } from "../types";
import { logoGamesT } from "./../../components/ui/organisms/Footer/types";

export const logoGamesAPI = {
  getLogoGames() {
    try {
      return instance
        .get<logoGamesT[]>(AppUrls.LOGOGAMES)
        .then((Response) => Response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
