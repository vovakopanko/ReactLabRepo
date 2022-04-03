import { TGameCard } from "../../components/ui/organisms/GameList/types";
import { instance } from "../Instance";
import { AppUrls } from "../types";
import { debounce } from "lodash";

export const searchAPI = {
  getGameCards(filter: string) {
    try {
      return instance
        .get<TGameCard[]>(AppUrls.GAMECARD + `${filter}`)
        .then((Response) => Response.data);
    } catch (error) {
      console.error(error);
    }
  },
};

const fetchData = async (query: string, cb: (val: TGameCard[]) => void) => {
  const res = await searchAPI.getGameCards(`&q=${query}`);
  if (res) {
    cb(res);
  }
};

export const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 300);
