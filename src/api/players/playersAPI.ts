import {get, post, put, remove} from "../baseRequest";

// need to fix "any"

export const playersAPI = {
    getPositions(token: string | undefined) {
        return get('/api/Player/GetPositions', token)
    },
    getPlayers(name: string, teamIds: Array<number>, page: number, pageSize: number, token: string) {
        const params = {
            name,
            page,
            pageSize
        }
        return get('/api/Player/GetPlayers?' + encodeURIComponent(JSON.stringify(params)), token,)
    },
    getPlayer(id: string, token: string) {
        return get(`/api/Player/Get?id=${id}`, token,)
    },
    addPlayer(data: PlayerType, token: string) {
        return post(`/api/Player/Add`, data, token)
    },
    updatePlayer(data: PlayerType, token: string) {
        return put(`/api/Player/Update`,data, token,)
    },
    deletePlayer(id: string, token: string) {
        return remove(`/api/Player/Delete?id=${id}`, token,)
    },
}

type PlayerType = {
    name: string
    number: number,
    position: string,
    team: number,
    birthday: string, // 2022-10-23T09:51:10.027Z
    height: number,
    weight: number,
    avatarUrl: string
}

