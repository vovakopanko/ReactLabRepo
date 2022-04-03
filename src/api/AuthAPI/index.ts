import { AuthResponse } from "./types";
import { instanceMongoDB } from "../Instance";
import { AxiosResponse } from "axios";
import { AppUrls } from "../types";

export const AuthProfileAPI = {
  async registrationProfile(
    userName: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return instanceMongoDB.post<AuthResponse>(AppUrls.SIGN_UP, {
      email: userName,
      password: password,
    });
  },
  async loginUser(
    userName: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return instanceMongoDB.put<AuthResponse>(AppUrls.SIGN_IN, {
      email: userName,
      password: password,
    });
  },
  async logout(): Promise<void> {
    return instanceMongoDB.post(AppUrls.LOGOUT);
  },
};
