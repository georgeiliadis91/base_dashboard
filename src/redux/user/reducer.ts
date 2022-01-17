import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { isLocalStorageSupported, LocalStore } from "../../helpers/storage";

interface IUserState {
  isAuthenticated: boolean;
}

const initialState: IUserState = { isAuthenticated: false };

const triggerSignInUser = (
  state: IUserState,
  action: PayloadAction<string>
) => {
  // TODO: handle token action.token
  state.isAuthenticated = true;
};

const triggerRefreshLogin = (state: IUserState) => {
  state.isAuthenticated = true;
};

const triggerSignOutUser = (state: IUserState) => {
  // if(isLocalStorageSupported){
  //  LocalStore.clear("token")
  // }
  state.isAuthenticated = false;
};

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
