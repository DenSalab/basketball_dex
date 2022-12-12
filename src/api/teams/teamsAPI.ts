import { get, post, put, remove } from "../baseRequest";
import { GetTeamsRequest, TeamDto, TeamDtoPageResult } from "./ITeams";

export const teamsAPI = {
  getTeams(
    name: string,
    page: number,
    pageSize: number,
    token?: string
  ): Promise<TeamDtoPageResult> {
    // const uri = encodeURIComponent(JSON.stringify(getTeamsRequest))
    return get(
      `/api/Team/GetTeams?Name=${name}&Page=${page}&PageSize=${pageSize}`,
      token
    );
  },
  getTeam(id: number, token: string): Promise<TeamDto> {
    return get(`/api/Team/Get?id=${id}`, token);
  },
  addTeam(teamData: any, token?: string): Promise<any> {
    return post<any>("/api/Team/Add", teamData, token);
  },
  updateTeam(teamData: TeamDto, token: string): Promise<TeamDto> {
    return put<TeamDto>("/api/Team/Update", teamData, token);
  },
  deleteTeam(id: string, token: string) {
    return remove(`/api/Team/Delete?id=${id}`, token);
  },
};
