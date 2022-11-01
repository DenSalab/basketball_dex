import {authAPI} from "../../api/authorization/authAPI";
import {setAuth, setUserData} from "./authSlice";
import {AppThunk} from "../../configs/redux/store";
import {setLoading} from "../../app/appSlice";

export const authTC = (login: string, password: string, token?: string): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await authAPI.signIn({login, password}, token);
            localStorage.setItem('token', response.token)
            dispatch(setAuth(true))
            dispatch(setUserData(response))
        } catch (e) {
            dispatch(setAuth(false))
            console.log('authorization:', e)
        } finally {
            dispatch(setLoading(false));
        }
    }

export const signUpTC = (userName: string, login: string, password: string): AppThunk =>
    async (dispatch) => {
        try {
            const response = await authAPI.signUp({userName, login, password});
            dispatch(setAuth(true))
            dispatch(setUserData(response))
            localStorage.setItem('token', response.token)
        } catch (e) {
            console.log('registration:', e)
        }
    }

