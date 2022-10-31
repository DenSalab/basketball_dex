import {combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import authSlice, {setAuth, setUserData} from "../../modules/authorization/authSlice";
import teamsSlice, {setTeamsData} from "../../modules/teams/teamsSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    teams: teamsSlice,
})
export const store = configureStore({
    reducer: rootReducer
})

//types
export type ActionsType =
    ReturnType<typeof setAuth> |
    ReturnType<typeof setUserData> |
    ReturnType<typeof setTeamsData>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, ActionsType>