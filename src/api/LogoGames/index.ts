import { instance } from "../Instance";
import { logoGamesT } from "./../../components/ui/organisms/Footer/types";

export const logoGamesAPI = {
  getLogoGames() {
    return instance
      .get<logoGamesT[]>(`logoGames`)
      .then((Response) => Response.data);
  },
};
