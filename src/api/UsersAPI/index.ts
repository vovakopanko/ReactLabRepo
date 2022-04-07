import { instanceMongoDB } from "./../Instance/index";
import { TCategory } from "../../pages/Home/components/CategoryList/types";
import { AppUrls } from "../types";

export const usersAPI = {
  getAllUsers() {
    try {
      return instanceMongoDB
        .get<TCategory[]>(AppUrls.GET_ALL_USERS)
        .then((Response) => Response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
