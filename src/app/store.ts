import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { starwarsApi } from "redux/starwars-api";

const rootReducer = combineReducers({
  [starwarsApi.reducerPath]: starwarsApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      /* Adding the api middleware enables caching, invalidation, polling and other features of `rtk-query` */
      getDefaultMiddleware().concat(starwarsApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
