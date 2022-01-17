import User from "./user/reducer";
import Alert from "./alert/reducer";
import Loading from "./loading/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const allReducer = configureStore({
  reducer: {
    user: User,
    alert: Alert,
    loading: Loading,
  },
});

export type AppState = ReturnType<typeof allReducer.getState>;
export type AppDispatch = typeof allReducer.dispatch;
