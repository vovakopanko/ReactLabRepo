import { AuthResponse } from "./types";
import { instanceMongoDB } from "../Instance";
import { AxiosResponse } from "axios";

export const AuthProfileAPI = {
  async registrationProfile(
    userName: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return instanceMongoDB.post<AuthResponse>(`signup`, {
      email: userName,
      password: password,
    });
  },
  async loginUser(
    userName: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return instanceMongoDB.put<AuthResponse>(`signin`, {
      email: userName,
      password: password,
    });
  },
  async logout(): Promise<void> {
    return instanceMongoDB.post(`logout`);
  },
};
