import { instance } from "../Instance";
import { AppUrls } from "../types";

type User = {
  id: number;
  email: string;
  password: string;
};

export const signIn = {
  getGameCards() {
    try {
      return instance
        .post<User[]>(AppUrls.USERS)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
