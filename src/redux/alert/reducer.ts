import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ActionTypes {
  ERROR = "ERROR",
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  CLOSE = "CLOSE",
}
interface IAlertState {
  open: boolean;
  message: string;
  type: ActionTypes;
}

const initialState: IAlertState = {
  open: false,
  message: "",
  type: ActionTypes.CLOSE,
};

const triggerErrorAlert = (_: IAlertState, action: PayloadAction<string>) => ({
  open: true,
  message: action.payload,
  type: ActionTypes.ERROR,
});

const triggerWarningAlert = (
  _: IAlertState,
  action: PayloadAction<string>
) => ({
  open: true,
  message: action.payload,
  type: ActionTypes.WARNING,
});

const triggerSuccessAlert = (
  _: IAlertState,
  action: PayloadAction<string>
) => ({
  open: true,
  message: action.payload,
  type: ActionTypes.SUCCESS,
});

const triggerInfoAlert = (_: IAlertState, action: PayloadAction<string>) => ({
  open: true,
  message: action.payload,
  type: ActionTypes.INFO,
});

const triggerCloseAlert = () => initialState;

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setErrorAlert: triggerErrorAlert,
    setWarningAlert: triggerWarningAlert,
    setSuccessAlert: triggerSuccessAlert,
    setInfoAlert: triggerInfoAlert,
    setCloseAlert: triggerCloseAlert,
  },
});

export const {
  setErrorAlert,
  setWarningAlert,
  setSuccessAlert,
  setInfoAlert,
  setCloseAlert,
} = alertSlice.actions;

export default alertSlice.reducer;
