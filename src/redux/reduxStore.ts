import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/auth";

let reducers = combineReducers({
  authReducer,
});

type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InfernActionsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

// @ts-ignore
window.__store__ = store;

export default store;
