import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import basketReducer from "./basket";

const rootReducer = {
  basketState: basketReducer,
};

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
