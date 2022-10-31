import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TeamDto, TeamDtoPageResult} from "../../api/teams/ITeams";


interface InitialState extends TeamDtoPageResult {
    currentTeam: TeamDto
}

const initialState: InitialState = {
    data: [] as Array<TeamDto>,
    count: 0,
    page: 0,
    size: 0,
    currentTeam: {} as TeamDto
}

export const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        setTeamsData: (state, action: PayloadAction<Array<TeamDto>>) => {
            state.data = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setPagesCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.size = action.payload;
        },
        setCurrentTeam: (state, action: PayloadAction<TeamDto>) => {
            state.currentTeam = action.payload;
        },
    },
})

export const {setTeamsData, setPage, setPagesCount, setPageSize, setCurrentTeam} = teamsSlice.actions

export default teamsSlice.reducer
