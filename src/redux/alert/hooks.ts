import { useAppDispatch } from "..";
import {
  setErrorAlert,
  setWarningAlert,
  setSuccessAlert,
  setInfoAlert,
  setCloseAlert,
} from "./reducer";

export function useTriggerWarning() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof setWarningAlert>) =>
    dispatch(setWarningAlert(...args));
}

export function useTriggerSuccess() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof setSuccessAlert>) =>
    dispatch(setSuccessAlert(...args));
}

export function useTriggerError() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof setErrorAlert>) =>
    dispatch(setErrorAlert(...args));
}

export function useTriggerInfo() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof setInfoAlert>) =>
    dispatch(setInfoAlert(...args));
}

export function useTriggerClose() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof setCloseAlert>) =>
    dispatch(setCloseAlert(...args));
}
