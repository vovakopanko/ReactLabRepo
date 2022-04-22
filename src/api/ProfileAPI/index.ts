import { instanceMongoDB } from "./../Instance/index";
import { TCategory } from "../../pages/Home/components/CategoryList/types";
import { AppUrls } from "../types";

type ProfileType = {
  candidate: {
    email: string;
    userName: string;
    profileDescription: string;
    address: string;
    phoneNumber: string;
  };
};

export const profileAPI = {
  updateUserInfo(
    email: string,
    userName: string,
    description: string,
    address: string,
    phoneNumber: string
  ) {
    try {
      return instanceMongoDB
        .post<ProfileType>(AppUrls.UPDATE_PROFILE_INFO, {
          email,
          userName,
          description,
          address,
          phoneNumber,
        })
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  updateUserAvatar(email: string, photoUser: string) {
    try {
      return instanceMongoDB
        .post<ProfileType>(AppUrls.UPDATE_PROFILE_AVATAR, {
          email,
          photoUser,
        })
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
