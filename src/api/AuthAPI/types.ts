export type Data = {
  address: string;
  email: string;
  id: string;
  isActivated?: boolean;
  phoneNumber: string;
  photoUser: string;
  profileDescription: string;
  userName: string;
};

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: Data;
}
