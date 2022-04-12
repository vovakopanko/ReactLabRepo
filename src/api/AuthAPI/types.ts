type IUser = {
  email: string;
  password: string;
  id: string;
};

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
