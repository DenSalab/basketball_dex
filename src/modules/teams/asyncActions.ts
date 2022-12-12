import { AppThunk } from "../../configs/redux/store";
import { teamsAPI } from "../../api/teams/teamsAPI";
import {
  setCurrentTeam,
  setPage,
  setPagesCount,
  setPageSize,
  setTeamsData,
} from "./teamsSlice";
import { TeamDto } from "../../api/teams/ITeams";
import { setLoading } from "../../app/appSlice";

export const getTeamsTC =
  (name: string, page: number, pageSize: number, token?: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const result = await teamsAPI.getTeams(name, page, pageSize, token);
      dispatch(setTeamsData(result.data));
      dispatch(setPage(result.page));
      dispatch(setPagesCount(result.count));
      dispatch(setPageSize(result.size));
    } catch (e) {
      console.log("getTeams:", e);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const addTeamTC =
  (teamData: any, token?: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const result = await teamsAPI.addTeam(teamData, token);
      const teams = getState().teams.data;
      dispatch(setTeamsData([...teams, result]));
    } catch (e) {
      console.log("addTeam:", e);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const getTeamTC =
  (id: number, token: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const result = await teamsAPI.getTeam(id, token);
      dispatch(setCurrentTeam(result));
    } catch (e) {
      console.log("deleteTeam:", e);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const deleteTeamTC =
  (id: string, token: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await teamsAPI.deleteTeam(id, token);
      dispatch(setCurrentTeam({} as TeamDto));
    } catch (e) {
      console.log("deleteTeam:", e);
    } finally {
      dispatch(setLoading(false));
    }
  };
