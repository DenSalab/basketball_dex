export interface GetTeamsRequest {
  name: string;
  page: number;
  pageSize: number;
}

export interface TeamDto {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
}

export interface TeamDtoPageResult {
  data: Array<TeamDto>;
  count: number;
  page: number;
  size: number;
}
