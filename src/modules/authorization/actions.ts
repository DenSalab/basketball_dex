import {createAction} from "@reduxjs/toolkit";
import {SET_IS_LOGGED_IN, SET_USER_DATA} from "./constants/auth";
import {authSlice} from "./authSlice";

// export const setIsLoggedIn = createAction(SET_IS_LOGGED_IN);
// export const setUserData = createAction(SET_USER_DATA);
//
// export const setIsLoggedIn = (isLogin: boolean) => ({type: SET_IS_LOGGED_IN, isLogin});

export const {setAuth, setUserData} = authSlice.actions

export default {}