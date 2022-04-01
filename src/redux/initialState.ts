type TState = {
  email: string;
  password: string;
  isActivated: boolean;
};

export const initialState: TState = {
  email: "",
  password: "",
  isActivated: false,
};
