import { instance } from "../Instance";
import { logoGamesT } from "./../../components/ui/organisms/Footer/types";

export const logoGamesAPI = {
  getLogoGamesURL() {
    return instance
      .get<logoGamesT[]>(`logoGames`)
      .then((Response) => Response.data);
  },
};
