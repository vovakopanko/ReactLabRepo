import { AuthResponse } from "./types";
import { instanceMongoDB } from "../Instance";
import { AppUrls } from "../types";

export const AuthProfileAPI = {
  async registrationProfile(userName: string, password: string) {
    try {
      return instanceMongoDB.post<AuthResponse>(AppUrls.SIGN_UP, {
        email: userName,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  },

  async loginUser(userName: string, password: string) {
    try {
      return instanceMongoDB.put<AuthResponse>(AppUrls.SIGN_IN, {
        email: userName,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  },

  async logout(): Promise<void> {
    try {
      return instanceMongoDB.post(AppUrls.LOGOUT);
    } catch (error) {
      console.error(error);
    }
  },
};
