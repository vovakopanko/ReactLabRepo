import { SIGN_IN, SIGN_OUT, LOG_OUT, ACTIVATED } from "../../actions/index";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loggedIn: true,
        userRole: { ...state.userRole, isRegistered: true, isGuest: false },
      };
    case SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
        userRole: { isGuest: false, isRegistered: false, hasTicket: false },
      };
    case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        userRole: { ...state.userRole, isGuest: true },
      };
    case ACTIVATED:
      return {
        ...state,
        isActivated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
