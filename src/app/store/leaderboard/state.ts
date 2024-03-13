import { ActionState } from "../types";
import { Leaderboard } from "./types";


export interface LeaderboardState {
    data: Leaderboard | undefined,
    actions: ActionState
}

export const initialState: LeaderboardState = {
    data: undefined,
    actions: {
        httpError: undefined,
        processing: false,
        success: false
    }
}