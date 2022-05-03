import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import cartReducer from "./reducers/cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InfernActionsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

export const persistor = persistStore(store);
export default store;
