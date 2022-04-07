import { InfernActionsType } from "@/redux/reduxStore";
import { actions } from "../../actions/index";

type TState = {
  email: string;
  password: string;
  isActivated: boolean;
  isAuth: boolean;
};

const initialState: TState = {
  email: "",
  password: "",
  isActivated: false,
  isAuth: false,
};

const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actions.IS_AUTH:
      return {
        ...state,
        isAuth: true,
      };
    case actions.LOG_OUT:
      return {
        ...state,
        isAuth: false,
        email: "",
        password: "",
      };
    default:
      return state;
  }
};

type ActionType = InfernActionsType<typeof authActions>;

const authActions = {
  changeStatusAuth: () =>
    <const>{
      type: actions.IS_AUTH,
    },
  logOut: () =>
    <const>{
      type: actions.LOG_OUT,
    },
};

export default authReducer;
