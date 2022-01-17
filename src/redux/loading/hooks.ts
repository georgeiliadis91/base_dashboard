import { useAppDispatch } from "..";
import { setLoadingFalse, setLoadingTrue } from "./reducer";

export function useTriggerLoadingOn() {
  const dispatch = useAppDispatch();
  return () => dispatch(setLoadingTrue());
}

export function useTriggerLoadingOff() {
  const dispatch = useAppDispatch();
  return () => dispatch(setLoadingFalse());
}
