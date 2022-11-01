import {combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import authSlice, {setAuth, setUserData} from "../../modules/authorization/authSlice";
import teamsSlice, {
    setCurrentTeam,
    setPage,
    setPagesCount,
    setPageSize,
    setTeamsData
} from "../../modules/teams/teamsSlice";
import appSlice, {setLoading} from "../../app/appSlice";


const rootReducer = combineReducers({
    app: appSlice,
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
    ReturnType<typeof setTeamsData> |
    ReturnType<typeof setPage> |
    ReturnType<typeof setPagesCount> |
    ReturnType<typeof setPageSize> |
    ReturnType<typeof setCurrentTeam> |
    ReturnType<typeof setLoading>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, ActionsType>
