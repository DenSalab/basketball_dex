import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;

export default appSlice.reducer;
