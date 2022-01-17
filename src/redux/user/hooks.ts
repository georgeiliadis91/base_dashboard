import { useAppDispatch } from "..";
import { userSignIn, userSignOut, refreshSignIn } from "./reducer";

export function useTriggerSignIn() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof userSignIn>) =>
    dispatch(userSignIn(...args));
}

export function useTriggerRefreshLogin() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof userSignOut>) =>
    dispatch(userSignOut(...args));
}

export function useTriggerSignOut() {
  const dispatch = useAppDispatch();
  return (...args: Parameters<typeof refreshSignIn>) =>
    dispatch(refreshSignIn(...args));
}
