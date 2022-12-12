import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  name: string;
  avatarUrl: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  name: "",
  avatarUrl: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserData: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name;
      state.avatarUrl = action.payload.avatarUrl;
    },
  },
});

export const { setAuth, setUserData } = authSlice.actions;

export default authSlice.reducer;
