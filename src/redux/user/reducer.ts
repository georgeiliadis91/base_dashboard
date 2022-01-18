import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { isLocalStorageSupported, LocalStore } from "../../helpers/storage";

interface IUserState {
  isAuthenticated: boolean;
}

const initialState: IUserState = { isAuthenticated: false };

const triggerSignInUser = () =>
  // TODO: handle token action.token
  ({ isAuthenticated: true });

const triggerRefreshLogin = () => ({ isAuthenticated: true });

const triggerSignOutUser = () =>
  // if(isLocalStorageSupported){
  //  LocalStore.clear("token")
  // }
  ({ isAuthenticated: false });

export const userSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    userSignIn: triggerSignInUser,
    userSignOut: triggerSignOutUser,
    refreshSignIn: triggerRefreshLogin,
  },
});

export const { userSignIn, userSignOut, refreshSignIn } = userSlice.actions;
export default userSlice.reducer;
