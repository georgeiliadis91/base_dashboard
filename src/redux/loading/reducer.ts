
import { createSlice } from '@reduxjs/toolkit'

interface ILoadingState {
    loading: boolean;
}

const initialState: ILoadingState = { loading: false };

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingTrue: (state) => {
      state.loading=true;
    },
    setLoadingFalse: (state) => {
      state.loading=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions

export default loadingSlice.reducer